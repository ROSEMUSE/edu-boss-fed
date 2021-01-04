<template>
  <div class="resource-list">
    <el-card class="box-card">
      <el-button @click="handleAdd">添加</el-button>
      <el-table
        :data="resourceCategories"
        style="width: 100%; margin-bottom: 20px"
        v-loading="isLoading"
      >
        <el-table-column type="index" label="编号" width="100">
        </el-table-column>
        <el-table-column prop="name" label="名称" width="180">
        </el-table-column>
        <el-table-column prop="createdTime" label="创建时间"> </el-table-column>
        <el-table-column prop="sort" label="排序"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog
      :title="isEdit ? '添加分类' : '修改分类'"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form">
        <el-form-item label="名称" label-width="80px">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="排序" label-width="80px">
          <el-input
            v-model="form.sort"
            type="number"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  getResourceCategories,
  saveOrderUpdate,
  deleteCategory,
} from "@/services/resource-category";

export default Vue.extend({
  name: "ResourceList",
  data() {
    return {
      resourceCategories: [], // 资源分类列表
      isLoading: true, // 加载状态
      dialogFormVisible: false,
      isEdit: false,
      form: {
        name: "",
        sort: "",
      },
    };
  },

  created() {
    this.loadResourceCategories();
  },

  methods: {
    async loadResourceCategories() {
      const { data } = await getResourceCategories();
      this.resourceCategories = data.data;
      this.isLoading = false;
    },
    handleAdd() {
      this.isEdit = true;
      this.dialogFormVisible = true;
    },
    handleEdit(item: any) {
      this.form = Object.assign({}, item);
      this.isEdit = false;
      this.dialogFormVisible = true;
    },

    async handleDelete(item: any) {
      await this.$confirm(`确认删除分类：${item.name}？`, "删除提示");
      await deleteCategory(item.id);
      this.$message.success("删除成功");
      this.loadResourceCategories();
    },

    async onSubmit() {
      await saveOrderUpdate(this.form);
      this.$message.success("操作成功");
      this.dialogFormVisible = false;
      this.loadResourceCategories();
    },
  },
});
</script>

<style lang="scss" scoped></style>
