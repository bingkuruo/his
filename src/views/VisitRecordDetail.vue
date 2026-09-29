<template>
  <div class="page">
    <div class="page-header">
      <el-button :icon="ArrowLeft" @click="handleBack">返回列表</el-button>
      <h2 class="page-title">就诊详情</h2>
    </div>

    <el-card v-loading="loading" shadow="never">
      <el-result
        v-if="!loading && !record"
        icon="warning"
        title="记录不存在"
        sub-title="未找到对应的就诊记录，请返回列表重新选择"
      >
        <template #extra>
          <el-button type="primary" @click="handleBack">返回列表</el-button>
        </template>
      </el-result>

      <template v-else-if="record">
        <el-descriptions title="患者信息" :column="3" border>
          <el-descriptions-item label="患者姓名">{{ record.patientName }}</el-descriptions-item>
          <el-descriptions-item label="性别">{{ record.gender }}</el-descriptions-item>
          <el-descriptions-item label="年龄">{{ record.age }} 岁</el-descriptions-item>
        </el-descriptions>

        <el-descriptions title="本次就诊信息" :column="3" border class="section">
          <el-descriptions-item label="就诊科室">{{ record.department }}</el-descriptions-item>
          <el-descriptions-item label="接诊医生">{{ record.doctor }}</el-descriptions-item>
          <el-descriptions-item label="就诊时间">{{ record.visitTime }}</el-descriptions-item>
          <el-descriptions-item label="诊断" :span="3">{{ record.diagnosis }}</el-descriptions-item>
          <el-descriptions-item label="主诉" :span="3">{{ record.chiefComplaint || '-' }}</el-descriptions-item>
        </el-descriptions>

        <div class="section">
          <h3 class="section-title">处方 / 医嘱</h3>
          <el-table :data="record.prescriptions" border>
            <el-table-column type="index" label="序号" width="70" align="center" />
            <el-table-column prop="name" label="药品名称" min-width="180" />
            <el-table-column prop="spec" label="规格" width="140" />
            <el-table-column prop="dosage" label="用法用量" min-width="240" />
            <template #empty>
              <el-empty description="本次就诊无处方" />
            </template>
          </el-table>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft } from '@element-plus/icons-vue'
import { getVisitRecordDetail } from '@/mock/visitRecords'

const route = useRoute()
const router = useRouter()

const record = ref(null)
const loading = ref(false)

async function fetchDetail() {
  loading.value = true
  try {
    record.value = await getVisitRecordDetail(route.params.id)
  } finally {
    loading.value = false
  }
}

function handleBack() {
  router.push({ name: 'VisitRecordList', query: route.query })
}

onMounted(fetchDetail)
</script>

<style scoped>
.page {
  padding: 20px;
  max-width: 1280px;
  margin: 0 auto;
}

.page-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.page-title {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
}

.section {
  margin-top: 24px;
}

.section-title {
  margin: 0 0 12px;
  font-size: 16px;
  font-weight: 600;
}
</style>
