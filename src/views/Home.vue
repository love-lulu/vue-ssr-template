<template>
  <div class="home">
    <div class="home-header">
      <h2 class="home-title">Welcome</h2>
      <p class="home-subtitle">Vue SSR Template Dashboard</p>
    </div>

    <el-row :gutter="20" class="home-stats">
      <el-col :span="6">
        <el-card shadow="hover" class="stat-card">
          <div class="stat-icon stat-icon--primary">
            <i class="el-icon-user"></i>
          </div>
          <div class="stat-info">
            <p class="stat-label">Users</p>
            <p class="stat-value">1,024</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" class="stat-card">
          <div class="stat-icon stat-icon--success">
            <i class="el-icon-document"></i>
          </div>
          <div class="stat-info">
            <p class="stat-label">Articles</p>
            <p class="stat-value">256</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" class="stat-card">
          <div class="stat-icon stat-icon--warning">
            <i class="el-icon-chat-dot-round"></i>
          </div>
          <div class="stat-info">
            <p class="stat-label">Messages</p>
            <p class="stat-value">87</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" class="stat-card">
          <div class="stat-icon stat-icon--danger">
            <i class="el-icon-star-off"></i>
          </div>
          <div class="stat-info">
            <p class="stat-label">Favorites</p>
            <p class="stat-value">432</p>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="home-content">
      <el-col :span="16">
        <el-card shadow="hover">
          <div slot="header" class="card-header">
            <span>Quick Start</span>
          </div>
          <el-table :data="quickLinks" style="width: 100%">
            <el-table-column prop="name" label="Name" width="200"></el-table-column>
            <el-table-column prop="description" label="Description"></el-table-column>
            <el-table-column prop="tech" label="Tech" width="160"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <div slot="header" class="card-header">
            <span>Tech Stack</span>
          </div>
          <ul class="tech-list">
            <li v-for="(item, index) in techStack" :key="index" class="tech-item">
              <el-tag :type="item.type" size="small">{{ item.label }}</el-tag>
              <span class="tech-version">{{ item.version }}</span>
            </li>
          </ul>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  title() {
    return {
      title: "Home",
      keywords: "vue-ssr, dashboard, home",
      description: "Vue SSR Template - Home Dashboard"
    };
  },
  data() {
    return {
      quickLinks: [
        { name: "Vue SSR", description: "Server-side rendering with Vue", tech: "vue-server-renderer" },
        { name: "Vuex Store", description: "Centralized state management", tech: "vuex" },
        { name: "Vue Router", description: "Client and server routing", tech: "vue-router" },
        { name: "Element UI", description: "Desktop UI component library", tech: "element-ui" },
        { name: "Webpack", description: "Module bundler for client and server", tech: "webpack" },
      ],
      techStack: [
        { label: "Vue", version: "2.5.16", type: "success" },
        { label: "Vuex", version: "3.x", type: "" },
        { label: "Vue Router", version: "3.x", type: "info" },
        { label: "Element UI", version: "2.x", type: "warning" },
        { label: "Koa", version: "2.x", type: "danger" },
        { label: "Webpack", version: "4.x", type: "" },
      ],
    };
  },
};
</script>

<style scoped>
.home {
  padding: 10px 0;
}
.home-header {
  margin-bottom: 24px;
}
.home-title {
  font-size: 22px;
  font-weight: 600;
  color: #303133;
  margin: 0 0 6px 0;
}
.home-subtitle {
  font-size: 14px;
  color: #909399;
  margin: 0;
}
.home-stats {
  margin-bottom: 20px;
}
.stat-card .el-card__body {
  display: flex;
  align-items: center;
  padding: 20px;
}
.stat-card {
  cursor: pointer;
}
.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: #fff;
  margin-right: 16px;
  flex-shrink: 0;
}
.stat-icon--primary { background: #409eff; }
.stat-icon--success { background: #67c23a; }
.stat-icon--warning { background: #e6a23c; }
.stat-icon--danger  { background: #f56c6c; }
.stat-info {
  flex: 1;
}
.stat-label {
  font-size: 13px;
  color: #909399;
  margin: 0 0 4px 0;
}
.stat-value {
  font-size: 22px;
  font-weight: 600;
  color: #303133;
  margin: 0;
}
.home-content {
  margin-bottom: 20px;
}
.card-header {
  font-size: 15px;
  font-weight: 600;
  color: #303133;
}
.tech-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.tech-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ebeef5;
}
.tech-item:last-child {
  border-bottom: none;
}
.tech-version {
  font-size: 13px;
  color: #606266;
}
</style>
