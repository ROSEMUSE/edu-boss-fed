<template>
  <div>
    <el-form>
      <el-form-item label="资源名称" label-width="120px">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="资源路径" label-width="120px">
        <el-input v-model="form.url"></el-input>
      </el-form-item>
      <el-form-item label="资源分类" label-width="120px">
        <el-select
          v-model="form.categoryId"
          placeholder="请选择资源分类"
          clearable
        >
          <el-option
            :label="item.name"
            :value="item.id"
            v-for="item in resourceCategories"
            :key="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="描述" label-width="120px">
        <el-input type="textarea" v-model="form.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="$emit('cancel')">取消</el-button>
        <el-button type="primary" @click="onSubmit">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { saveOrUpdate, getResource } from "@/services/resource";

export default Vue.extend({
  name: "CreateOrEditResource",
  props: {
    id: {
      type: [String, Number],
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
    resourceCategories: {
      type: Array,
      default: ()=>{
          return []
      },
    },
  },
  data() {
    return {
      form: {
        code: "",
        name: "",
        categoryId:"",
        description: "",
      },
    };
  },

  created() {
    // 如果是编辑操作，则根据角色 ID 加载展示角色信息
    if (this.isEdit) {
      this.loadResource();
    }
  },

  methods: {
    async loadResource() {
      const { data } = await getResource(this.id);
      this.form = data.data;
    },

    async onSubmit() {
      await saveOrUpdate(this.form);
      this.$message.success("操作成功");
      this.$emit("success");
    },
  },
});
</script>

<style lang="scss" scoped></style>
