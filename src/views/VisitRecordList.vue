<template>
  <div class="page">
    <div class="page-header">
      <h2 class="page-title">就诊记录</h2>
    </div>

    <el-card shadow="never" class="filter-card">
      <el-form :model="filters" inline @submit.prevent>
        <el-form-item label="患者姓名">
          <el-input
            v-model="filters.patientName"
            placeholder="请输入患者姓名"
            clearable
            style="width: 180px"
            @keyup.enter="handleQuery"
          />
        </el-form-item>
        <el-form-item label="科室">
          <el-select
            v-model="filters.department"
            placeholder="全部科室"
            clearable
            style="width: 160px"
          >
            <el-option v-for="item in departments" :key="item" :label="item" :value="item" />
          </el-select>
        </el-form-item>
        <el-form-item label="就诊时间">
          <el-date-picker
            v-model="filters.timeRange"
            type="daterange"
            value-format="YYYY-MM-DD"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            style="width: 260px"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :icon="Search" @click="handleQuery">查询</el-button>
          <el-button :icon="Refresh" @click="handleReset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card shadow="never" class="table-card">
      <el-table
        v-loading="loading"
        :data="tableData"
        stripe
        style="width: 100%"
        @row-click="handleRowClick"
      >
        <el-table-column type="index" label="序号" width="70" align="center" />
        <el-table-column prop="patientName" label="患者姓名" width="120" />
        <el-table-column prop="department" label="科室" width="120" />
        <el-table-column prop="diagnosis" label="诊断" min-width="200" show-overflow-tooltip />
        <el-table-column prop="visitTime" label="就诊时间" width="180" />
        <el-table-column label="操作" width="120" align="center" fixed="right">
          <template #default="{ row }">
            <el-button type="primary" link @click.stop="handleRowClick(row)">查看详情</el-button>
          </template>
        </el-table-column>
        <template #empty>
          <el-empty description="暂无就诊记录" />
        </template>
      </el-table>

      <div class="pagination-wrapper">
        <el-pagination
          v-model:current-page="pagination.page"
          v-model:page-size="pagination.pageSize"
          :total="pagination.total"
          :page-sizes="[10, 20, 50]"
          layout="total, sizes, prev, pager, next, jumper"
          background
          @current-change="fetchList"
          @size-change="handleSizeChange"
        />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { Search, Refresh } from '@element-plus/icons-vue'
import { departments, getVisitRecordList } from '@/mock/visitRecords'

const route = useRoute()
const router = useRouter()

const filters = reactive({
  patientName: '',
  department: '',
  timeRange: []
})

const pagination = reactive({
  page: 1,
  pageSize: 10,
  total: 0
})

const tableData = ref([])
const loading = ref(false)

function initFiltersFromQuery() {
  const query = route.query
  filters.patientName = query.patientName || ''
  filters.department = query.department || ''
  filters.timeRange =
    query.startDate && query.endDate ? [query.startDate, query.endDate] : []
  pagination.page = Number(query.page) || 1
  pagination.pageSize = Number(query.pageSize) || 10
}

function syncQuery() {
  const query = {}
  if (filters.patientName) query.patientName = filters.patientName
  if (filters.department) query.department = filters.department
  if (filters.timeRange && filters.timeRange.length === 2) {
    query.startDate = filters.timeRange[0]
    query.endDate = filters.timeRange[1]
  }
  if (pagination.page > 1) query.page = String(pagination.page)
  if (pagination.pageSize !== 10) query.pageSize = String(pagination.pageSize)
  router.replace({ name: 'VisitRecordList', query })
}

async function fetchList() {
  loading.value = true
  try {
    const { list, total } = await getVisitRecordList({
      patientName: filters.patientName,
      department: filters.department,
      timeRange: filters.timeRange,
      page: pagination.page,
      pageSize: pagination.pageSize
    })
    tableData.value = list
    pagination.total = total
  } finally {
    loading.value = false
  }
}

function handleQuery() {
  if (filters.timeRange && filters.timeRange.length === 2 && filters.timeRange[0] > filters.timeRange[1]) {
    ElMessage.warning('开始日期不能晚于结束日期')
    return
  }
  pagination.page = 1
  syncQuery()
  fetchList()
}

function handleReset() {
  filters.patientName = ''
  filters.department = ''
  filters.timeRange = []
  pagination.page = 1
  pagination.pageSize = 10
  syncQuery()
  fetchList()
}

function handleSizeChange() {
  pagination.page = 1
  syncQuery()
  fetchList()
}

function handleRowClick(row) {
  router.push({
    name: 'VisitRecordDetail',
    params: { id: row.id },
    query: route.query
  })
}

onMounted(() => {
  initFiltersFromQuery()
  fetchList()
})
</script>

<style scoped>
.page {
  min-height: 100%;
  padding: 24px;
  max-width: 1280px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
}

.page-title {
  margin: 0 0 20px;
  font-size: 22px;
  font-weight: 600;
  color: #3a4a63;
  letter-spacing: 1px;
}

.filter-card {
  margin-bottom: 16px;
  border: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 6px 20px rgba(120, 150, 200, 0.12);
}

.filter-card :deep(.el-form--inline) {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.filter-card :deep(.el-form-item) {
  margin-bottom: 8px;
}

.table-card {
  margin-bottom: 16px;
  border: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 6px 20px rgba(120, 150, 200, 0.12);
}

:deep(.el-table__row) {
  cursor: pointer;
}

.pagination-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
}
</style>
