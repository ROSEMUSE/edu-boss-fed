<template>
  <div class="container">
    <el-card>
      <div slot="header">
        <div class="pad-b10">课程：{{ courseInfo.courseName }}</div>
        <div class="pad-b10">阶段：{{ courseInfo.sectionName }}</div>
        <div class="pad-b10">课时：{{ courseInfo.theme }}</div>
      </div>
      <el-form label-width="40px">
        <el-form-item label="视频">
          <input ref="video-file" type="file" class="file-input" />
        </el-form-item>
        <el-form-item label="封面">
          <input ref="image-file" type="file" class="file-input" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="authUpload">开始上传</el-button>
          <el-button
            @click="
              $router.push({
                name: 'course-section',
                params: {
                  courseId: courseInfo.courseId,
                },
              })
            "
            >返回</el-button
          >
        </el-form-item>
      <el-form-item>
          <p v-show="uploadPercent!==0">视频上传中：{{uploadPercent}}%</p>
           </el-form-item>
      </el-form>
     
    </el-card>

  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
import {
  aliyunImagUploadAddressAdnAuth,
  aliyunVideoUploadAddressAdnAuth,
  transCodeVideo,
  getAliyunTransCodePercent,
} from "@/services/aliyun-oss";
import { updateLocale } from 'moment';

export default {
  data() {
    return {
      uploader: null,
      videoId: null,
      imageUrl: "",
      fileName: "",
      courseInfo: {},
      uploadPercent:0
    };
  },
  computed: {
    video() {
      return this.$refs["video-file"];
    },
    image() {
      return this.$refs["image-file"];
    },
  },
  created() {
    this.initUploader();
    const query = this.$route.query;
    this.courseInfo = query;
  },
  methods: {
    authUpload() {
      const videoFile = this.video.files[0];
      const imageFile = this.image.files[0];
      //将用户所选的文件添加到列表中
      this.uploader.addFile(videoFile, null, null, null, '{"Vod":{}}');
      this.uploader.addFile(imageFile, null, null, null, '{"Vod":{}}');
      //开始上传
      //一旦开始上传 就会按照列表中添加的顺序开始上传
      this.uploader.startUpload();
    },
    initUploader() {
      this.uploader = new window.AliyunUpload.Vod({
        // 阿里账号ID，必须有值 ，值的来源https://help.aliyun.com/knowledge_detail/37196.html
        userId: 1618139964448548,
        // 上传到点播的地域， 默认值为'cn-shanghai',//eu-central-1,ap-southeast-1
        region: "cn-shanghai",
        // 分片大小默认1M，不能小于100K
        partSize: 1048576,
        // 并行上传分片个数，默认5
        parallel: 5,
        // 网络原因失败时，重新上传次数，默认为3
        retryCount: 3,
        // 网络原因失败时，重新上传间隔时间，默认为2秒
        retryDuration: 2,
        // 开始上传
        onUploadstarted: async (uploadInfo) => {
          console.log("onUploadstarted", uploadInfo);
          //通过我们的后端获取文件上传凭证
          let uploadAuthInfo = null;
          //判断是图片还是视频
          if (uploadInfo.isImage) {
            const { data } = await aliyunImagUploadAddressAdnAuth();
            this.imageUrl = data.data.imageURL;
            uploadAuthInfo = data.data;
          } else {
            const { data } = await aliyunVideoUploadAddressAdnAuth({
              fileName: uploadInfo.file.name,
            });
            this.videoId = data.data.videoId;
            this.fileName = uploadInfo.file.name;
            uploadAuthInfo = data.data;
          }

          //通过 uploader.setUploadAuthAndAddress 设置上传凭证
          this.uploader.setUploadAuthAndAddress(
            uploadInfo,
            uploadAuthInfo.uploadAuth,
            uploadAuthInfo.uploadAddress,
            uploadAuthInfo.videoId || uploadAuthInfo.imageId
          );
        },
        // 文件上传成功
        onUploadSucceed: function (uploadInfo) {
          console.log("onUploadSucceed", uploadInfo);
        },
        // 文件上传失败
        onUploadFailed: function (uploadInfo, code, message) {
          console.log("onUploadFailed");
        },
        // 文件上传进度，单位：字节
        onUploadProgress:  (uploadInfo, totalSize, loadedPercent) =>{
            console.log(uploadInfo, totalSize, loadedPercent);
            if(!uploadInfo.isImage){
                this.uploadPercent = Math.floor(loadedPercent * 100)
                console.log(this.uploadPercent);
            }
        },
        // 上传凭证超时
        onUploadTokenExpired: function (uploadInfo) {
          console.log("onUploadTokenExpired");
        },
        // 全部文件上传结束
        onUploadEnd: async (uploadInfo) => {
            // this.uploadPercent = 0;
          console.log({
            lessonId: this.$route.query.lessonId,
            fileId: this.videoId,
            coverImageUrl: this.imageUrl,
            fileName: this.fileName,
          });
          const { data } = await transCodeVideo({
            lessonId: this.$route.query.lessonId,
            fileId: this.videoId,
            coverImageUrl: this.imageUrl,
            fileName: this.fileName,
          });
          console.log(data);

          setInterval(async () => {
            const { data } = await getAliyunTransCodePercent(
              this.$route.query.lessonId
            );
            console.log("转码进度", data);
          }, 3000);
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.pad-b10 {
  padding-bottom: 10px;
}
.file-input {
}
</style>
