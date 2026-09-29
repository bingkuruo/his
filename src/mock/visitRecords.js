export const departments = [
  '内科',
  '外科',
  '儿科',
  '妇产科',
  '骨科',
  '皮肤科',
  '眼科',
  '耳鼻喉科'
]

const records = [
  {
    id: 'VR20260901001',
    patientName: '张伟',
    gender: '男',
    age: 45,
    department: '内科',
    doctor: '李建国',
    visitTime: '2026-09-01 09:15',
    diagnosis: '高血压2级',
    chiefComplaint: '头晕、头痛3天，伴颈部僵硬',
    prescriptions: [
      { name: '苯磺酸氨氯地平片', spec: '5mg*7片', dosage: '每日1次，每次1片，口服' },
      { name: '阿司匹林肠溶片', spec: '100mg*30片', dosage: '每日1次，每次1片，口服' }
    ]
  },
  {
    id: 'VR20260901002',
    patientName: '王芳',
    gender: '女',
    age: 32,
    department: '妇产科',
    doctor: '赵敏',
    visitTime: '2026-09-01 10:02',
    diagnosis: '早孕检查',
    chiefComplaint: '停经42天，要求产检',
    prescriptions: [{ name: '叶酸片', spec: '0.4mg*31片', dosage: '每日1次，每次1片，口服' }]
  },
  {
    id: 'VR20260901003',
    patientName: '李强',
    gender: '男',
    age: 8,
    department: '儿科',
    doctor: '陈晓华',
    visitTime: '2026-09-01 10:40',
    diagnosis: '急性上呼吸道感染',
    chiefComplaint: '发热2天，咳嗽、流涕',
    prescriptions: [
      { name: '布洛芬混悬液', spec: '100ml', dosage: '发热时服用5ml，间隔不少于6小时' },
      { name: '小儿豉翘清热颗粒', spec: '2g*9袋', dosage: '每日3次，每次1袋，温水冲服' }
    ]
  },
  {
    id: 'VR20260902001',
    patientName: '刘洋',
    gender: '男',
    age: 28,
    department: '骨科',
    doctor: '孙浩',
    visitTime: '2026-09-02 08:50',
    diagnosis: '左踝关节扭伤',
    chiefComplaint: '运动后左踝肿痛1天',
    prescriptions: [{ name: '云南白药气雾剂', spec: '85g', dosage: '外用，每日3次，喷涂患处' }]
  },
  {
    id: 'VR20260902002',
    patientName: '陈静',
    gender: '女',
    age: 26,
    department: '皮肤科',
    doctor: '周丽',
    visitTime: '2026-09-02 11:20',
    diagnosis: '接触性皮炎',
    chiefComplaint: '面部红斑、瘙痒2天',
    prescriptions: [
      { name: '氯雷他定片', spec: '10mg*6片', dosage: '每日1次，每次1片，口服' },
      { name: '丁酸氢化可的松乳膏', spec: '10g', dosage: '外用，每日2次，薄涂患处' }
    ]
  },
  {
    id: 'VR20260902003',
    patientName: '杨帆',
    gender: '男',
    age: 60,
    department: '内科',
    doctor: '李建国',
    visitTime: '2026-09-02 14:05',
    diagnosis: '2型糖尿病',
    chiefComplaint: '多饮、多尿1月，血糖升高',
    prescriptions: [{ name: '盐酸二甲双胍缓释片', spec: '0.5g*30片', dosage: '每日2次，每次1片，随餐口服' }]
  },
  {
    id: 'VR20260903001',
    patientName: '黄磊',
    gender: '男',
    age: 38,
    department: '外科',
    doctor: '吴刚',
    visitTime: '2026-09-03 09:30',
    diagnosis: '急性阑尾炎',
    chiefComplaint: '转移性右下腹痛8小时',
    prescriptions: [{ name: '头孢呋辛酯片', spec: '0.25g*12片', dosage: '每日2次，每次1片，口服' }]
  },
  {
    id: 'VR20260903002',
    patientName: '赵雪',
    gender: '女',
    age: 22,
    department: '眼科',
    doctor: '郑海',
    visitTime: '2026-09-03 10:15',
    diagnosis: '急性结膜炎',
    chiefComplaint: '双眼红、分泌物增多2天',
    prescriptions: [{ name: '左氧氟沙星滴眼液', spec: '5ml', dosage: '滴眼，每日4次，每次1滴' }]
  },
  {
    id: 'VR20260903003',
    patientName: '周杰',
    gender: '男',
    age: 52,
    department: '耳鼻喉科',
    doctor: '冯涛',
    visitTime: '2026-09-03 15:40',
    diagnosis: '慢性咽炎',
    chiefComplaint: '咽部异物感、干咳1月',
    prescriptions: [{ name: '金嗓子喉片', spec: '2g*12片', dosage: '含服，每日5次，每次1片' }]
  },
  {
    id: 'VR20260904001',
    patientName: '孙丽',
    gender: '女',
    age: 35,
    department: '妇产科',
    doctor: '赵敏',
    visitTime: '2026-09-04 09:00',
    diagnosis: '月经不调',
    chiefComplaint: '月经周期紊乱3月',
    prescriptions: [{ name: '地屈孕酮片', spec: '10mg*20片', dosage: '遵医嘱，每日2次，每次1片' }]
  },
  {
    id: 'VR20260904002',
    patientName: '马超',
    gender: '男',
    age: 41,
    department: '骨科',
    doctor: '孙浩',
    visitTime: '2026-09-04 10:50',
    diagnosis: '腰椎间盘突出',
    chiefComplaint: '腰痛伴右下肢放射痛2周',
    prescriptions: [
      { name: '塞来昔布胶囊', spec: '0.2g*6粒', dosage: '每日1次，每次1粒，口服' },
      { name: '甲钴胺片', spec: '0.5mg*20片', dosage: '每日3次，每次1片，口服' }
    ]
  },
  {
    id: 'VR20260904003',
    patientName: '朱琳',
    gender: '女',
    age: 29,
    department: '皮肤科',
    doctor: '周丽',
    visitTime: '2026-09-04 14:30',
    diagnosis: '荨麻疹',
    chiefComplaint: '全身风团、瘙痒1天',
    prescriptions: [{ name: '依巴斯汀片', spec: '10mg*10片', dosage: '每日1次，每次1片，口服' }]
  },
  {
    id: 'VR20260905001',
    patientName: '郭涛',
    gender: '男',
    age: 55,
    department: '内科',
    doctor: '李建国',
    visitTime: '2026-09-05 08:45',
    diagnosis: '冠心病',
    chiefComplaint: '活动后胸闷、气短1周',
    prescriptions: [
      { name: '阿托伐他汀钙片', spec: '20mg*7片', dosage: '每晚1次，每次1片，口服' },
      { name: '单硝酸异山梨酯缓释片', spec: '40mg*7片', dosage: '每日1次，每次1片，口服' }
    ]
  },
  {
    id: 'VR20260905002',
    patientName: '何洁',
    gender: '女',
    age: 6,
    department: '儿科',
    doctor: '陈晓华',
    visitTime: '2026-09-05 10:20',
    diagnosis: '急性支气管炎',
    chiefComplaint: '咳嗽、咳痰4天',
    prescriptions: [{ name: '氨溴索口服溶液', spec: '100ml', dosage: '每日2次，每次5ml，口服' }]
  },
  {
    id: 'VR20260905003',
    patientName: '高鹏',
    gender: '男',
    age: 33,
    department: '外科',
    doctor: '吴刚',
    visitTime: '2026-09-05 16:10',
    diagnosis: '腹股沟疝',
    chiefComplaint: '右侧腹股沟可复性包块3月',
    prescriptions: []
  },
  {
    id: 'VR20260906001',
    patientName: '林娜',
    gender: '女',
    age: 47,
    department: '眼科',
    doctor: '郑海',
    visitTime: '2026-09-06 09:10',
    diagnosis: '干眼症',
    chiefComplaint: '双眼干涩、异物感1月',
    prescriptions: [{ name: '玻璃酸钠滴眼液', spec: '5ml', dosage: '滴眼，每日4次，每次1滴' }]
  },
  {
    id: 'VR20260906002',
    patientName: '罗军',
    gender: '男',
    age: 64,
    department: '耳鼻喉科',
    doctor: '冯涛',
    visitTime: '2026-09-06 11:05',
    diagnosis: '突发性耳聋',
    chiefComplaint: '左耳听力下降伴耳鸣2天',
    prescriptions: [{ name: '银杏叶提取物片', spec: '40mg*20片', dosage: '每日3次，每次1片，口服' }]
  },
  {
    id: 'VR20260906003',
    patientName: '梁静',
    gender: '女',
    age: 30,
    department: '妇产科',
    doctor: '赵敏',
    visitTime: '2026-09-06 14:50',
    diagnosis: '细菌性阴道炎',
    chiefComplaint: '白带增多伴异味1周',
    prescriptions: [{ name: '甲硝唑栓', spec: '0.5g*7枚', dosage: '每晚1次，每次1枚，阴道给药' }]
  },
  {
    id: 'VR20260907001',
    patientName: '宋涛',
    gender: '男',
    age: 25,
    department: '皮肤科',
    doctor: '周丽',
    visitTime: '2026-09-07 09:35',
    diagnosis: '痤疮',
    chiefComplaint: '面部丘疹、脓疱3月',
    prescriptions: [{ name: '阿达帕林凝胶', spec: '15g', dosage: '外用，每晚1次，薄涂患处' }]
  },
  {
    id: 'VR20260907002',
    patientName: '谢婷',
    gender: '女',
    age: 58,
    department: '内科',
    doctor: '李建国',
    visitTime: '2026-09-07 10:40',
    diagnosis: '甲状腺功能减退',
    chiefComplaint: '乏力、畏寒、体重增加2月',
    prescriptions: [{ name: '左甲状腺素钠片', spec: '50μg*30片', dosage: '每日1次，每次1片，早餐前口服' }]
  },
  {
    id: 'VR20260907003',
    patientName: '唐磊',
    gender: '男',
    age: 19,
    department: '骨科',
    doctor: '孙浩',
    visitTime: '2026-09-07 15:20',
    diagnosis: '右桡骨远端骨折',
    chiefComplaint: '跌倒后右腕肿痛2小时',
    prescriptions: [{ name: '碳酸钙D3片', spec: '30片', dosage: '每日1次，每次1片，口服' }]
  },
  {
    id: 'VR20260908001',
    patientName: '冯敏',
    gender: '女',
    age: 40,
    department: '外科',
    doctor: '吴刚',
    visitTime: '2026-09-08 08:55',
    diagnosis: '乳腺增生',
    chiefComplaint: '双侧乳房胀痛伴结节1月',
    prescriptions: [{ name: '乳癖消片', spec: '0.32g*60片', dosage: '每日3次，每次5片，口服' }]
  },
  {
    id: 'VR20260908002',
    patientName: '许诺',
    gender: '女',
    age: 3,
    department: '儿科',
    doctor: '陈晓华',
    visitTime: '2026-09-08 11:30',
    diagnosis: '幼儿急疹',
    chiefComplaint: '高热3天，热退后出疹',
    prescriptions: []
  },
  {
    id: 'VR20260908003',
    patientName: '邓超',
    gender: '男',
    age: 49,
    department: '耳鼻喉科',
    doctor: '冯涛',
    visitTime: '2026-09-08 16:00',
    diagnosis: '过敏性鼻炎',
    chiefComplaint: '阵发性喷嚏、鼻痒1周',
    prescriptions: [{ name: '糠酸莫米松鼻喷雾剂', spec: '60揿', dosage: '每侧鼻孔2揿，每日1次' }]
  }
]

const DELAY = 300

function delay(result) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(result), DELAY)
  })
}

export function getVisitRecordList(params = {}) {
  const { patientName = '', department = '', timeRange = [], page = 1, pageSize = 10 } = params

  let list = records.slice()

  if (patientName.trim()) {
    const keyword = patientName.trim()
    list = list.filter((item) => item.patientName.includes(keyword))
  }

  if (department) {
    list = list.filter((item) => item.department === department)
  }

  if (Array.isArray(timeRange) && timeRange.length === 2 && timeRange[0] && timeRange[1]) {
    const start = timeRange[0]
    const end = timeRange[1]
    list = list.filter((item) => item.visitTime >= start && item.visitTime <= `${end} 23:59`)
  }

  list.sort((a, b) => (a.visitTime < b.visitTime ? 1 : -1))

  const total = list.length
  const startIndex = (page - 1) * pageSize
  const pageList = list.slice(startIndex, startIndex + pageSize)

  return delay({ list: pageList, total })
}

export function getVisitRecordDetail(id) {
  const record = records.find((item) => item.id === id) || null
  return delay(record)
}
