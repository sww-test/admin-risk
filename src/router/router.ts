import Layout from '@/views/layout/index.vue'

export default {
  administrators: {
    path: '/administrators',
    name: 'Administrators',
    redirect: '/administrators/account',
    component: Layout,
    children: [
      {
        path: 'account',
        name: 'AAccount',
        component: () => import('@/views/administrators/account/index.vue'),
        redirect: '/administrators/account/list',
        meta: {
          title: '超管',
          icon: '',
          noKeepAlive: false,
          fullPath: ''
        },
        children: [
          {
            path: 'list',
            name: 'AAccountList',
            component: () => import('@/views/administrators/account/list/index.vue'),
            meta: {
              title: '账号管理',
              icon: 'license'
            }
          }
        ]
      }
    ]
  },
  headquarters: {
    path: '/headquarters',
    name: 'Headquarters',
    redirect: '/headquarters/base',
    component: Layout,
    children: [
      {
        path: 'base',
        name: 'HBase',
        redirect: '/headquarters/base/business',
        component: () => import('@/views/headquarters/base/index.vue'),
        meta: {
          title: '基本信息管理',
          icon: ''
        },
        children: [
          {
            path: 'business',
            name: 'HBaseBusiness',
            redirect: '/headquarters/base/business/list',
            component: () => import('@/views/headquarters/base/business/index.vue'),
            meta: {
              title: '企业基本信息',
              icon: 'business'
            },
            children: [
              {
                path: 'list',
                name: 'HBaseBusinessList',
                component: () => import('@/views/headquarters/base/business/list/index.vue'),
                meta: {
                  hidden: true,
                  noKeepAlive: false
                }
              },
              {
                path: 'detail',
                name: 'HBaseBusinessDetail',
                component: () => import('@/views/headquarters/base/business/detail/index.vue'),
                meta: {
                  title: '详情',
                  noKeepAlive: true,
                  hidden: true
                }
              }
            ]
          },
          {
            path: 'license',
            name: 'HBaseLicense',
            redirect: '/headquarters/base/license/list',
            component: () => import('@/views/headquarters/base/license/index.vue'),
            meta: {
              title: '营业执照',
              icon: 'license'
            },
            children: [
              {
                path: 'list',
                name: 'HBaseLicenseList',
                component: () => import('@/views/headquarters/base/license/list/index.vue'),
                meta: {
                  hidden: true
                }
              },
              {
                path: 'detail',
                name: 'HBaseLicenseDetail',
                component: () => import('@/views/headquarters/base/license/detail/index.vue'),
                meta: {
                  title: '详情',
                  noKeepAlive: true,
                  hidden: true
                }
              }
            ]
          },
          {
            path: 'drugs',
            name: 'HBaseDrugs',
            redirect: '/headquarters/base/drugs/list',
            component: () => import('@/views/headquarters/base/drugs/index.vue'),
            meta: {
              title: '药品经营许可证',
              icon: 'drugs'
            },
            children: [
              {
                path: 'list',
                name: 'HBaseDrugsList',
                component: () => import('@/views/headquarters/base/drugs/list/index.vue'),
                meta: {
                  hidden: true
                }
              },
              {
                path: 'detail',
                name: 'HBaseDrugsDetail',
                component: () => import('@/views/headquarters/base/drugs/detail/index.vue'),
                meta: {
                  title: '详情',
                  noKeepAlive: true,
                  hidden: true
                }
              }
            ]
          },
          {
            path: 'appliance',
            name: 'HBaseAppliance',
            redirect: '/headquarters/base/appliance/list',
            component: () => import('@/views/headquarters/base/appliance/index.vue'),
            meta: {
              title: '医疗器械经营许可证',
              icon: 'license'
            },
            children: [
              {
                path: 'list',
                name: 'HBaseApplianceList',
                component: () => import('@/views/headquarters/base/appliance/list/index.vue'),
                meta: {
                  hidden: true
                }
              },
              {
                path: 'detail',
                name: 'HBaseApplianceDetail',
                component: () => import('@/views/headquarters/base/appliance/detail/index.vue'),
                meta: {
                  title: '详情',
                  noKeepAlive: true,
                  hidden: true
                }
              }
            ]
          },
          {
            path: 'second',
            name: 'HBaseSecond',
            redirect: '/headquarters/base/second/list',
            component: () => import('@/views/headquarters/base/second/index.vue'),
            meta: {
              title: '第二类医疗器械备案凭证',
              icon: 'license'
            },
            children: [
              {
                path: 'list',
                name: 'HBaseSecondList',
                component: () => import('@/views/headquarters/base/second/list/index.vue'),
                meta: {
                  hidden: true
                }
              },
              {
                path: 'detail',
                name: 'HBaseSecondDetail',
                component: () => import('@/views/headquarters/base/second/detail/index.vue'),
                meta: {
                  title: '详情',
                  noKeepAlive: true,
                  hidden: true
                }
              }
            ]
          },
          {
            path: 'internet',
            name: 'HBaseInternet',
            redirect: '/headquarters/base/internet/list',
            component: () => import('@/views/headquarters/base/internet/index.vue'),
            meta: {
              title: '互联网药品信息服务资格证书',
              icon: 'license'
            },
            children: [
              {
                path: 'list',
                name: 'HBaseInternetList',
                component: () => import('@/views/headquarters/base/internet/list/index.vue'),
                meta: {
                  hidden: true
                }
              },
              {
                path: 'detail',
                name: 'HBaseInternetDetail',
                component: () => import('@/views/headquarters/base/internet/detail/index.vue'),
                meta: {
                  title: '详情',
                  noKeepAlive: true,
                  hidden: true
                }
              }
            ]
          },
          {
            path: 'quality',
            name: 'HBaseQuality',
            redirect: '/headquarters/base/quality/list',
            component: () => import('@/views/headquarters/base/quality/index.vue'),
            meta: {
              title: '药品质量负责人',
              icon: 'quality'
            },
            children: [
              {
                path: 'list',
                name: 'HBaseQualityList',
                component: () => import('@/views/headquarters/base/quality/list/index.vue'),
                meta: {
                  hidden: true
                }
              },
              {
                path: 'detail',
                name: 'HBaseQualityDetail',
                component: () => import('@/views/headquarters/base/quality/detail/index.vue'),
                meta: {
                  title: '详情',
                  noKeepAlive: true,
                  hidden: true
                }
              }
            ]
          },
          {
            path: 'control',
            name: 'HBaseControl',
            redirect: '/headquarters/base/control/list',
            component: () => import('@/views/headquarters/base/control/index.vue'),
            meta: {
              title: '质管人员',
              icon: 'quality'
            },
            children: [
              {
                path: 'list',
                name: 'HBaseControlList',
                component: () => import('@/views/headquarters/base/control/list/index.vue'),
                meta: {
                  hidden: true
                }
              },
              {
                path: 'detail',
                name: 'HBaseControlDetail',
                component: () => import('@/views/headquarters/base/control/detail/index.vue'),
                meta: {
                  title: '详情',
                  noKeepAlive: true,
                  hidden: true
                }
              }
            ]
          },
          {
            path: 'certificate',
            name: 'HBaseCertificate',
            redirect: '/headquarters/base/certificate/list',
            component: () => import('@/views/headquarters/base/certificate/index.vue'),
            meta: {
              title: '办证人员',
              icon: 'quality'
            },
            children: [
              {
                path: 'list',
                name: 'HBaseCertificateList',
                component: () => import('@/views/headquarters/base/certificate/list/index.vue'),
                meta: {
                  hidden: true
                }
              },
              {
                path: 'detail',
                name: 'HBaseCertificateDetail',
                component: () => import('@/views/headquarters/base/certificate/detail/index.vue'),
                meta: {
                  title: '详情',
                  noKeepAlive: true,
                  hidden: true
                }
              }
            ]
          },
          {
            path: 'report-form',
            name: 'HBaseReportForm',
            component: () => import('@/views/headquarters/base/report-form/index.vue'),
            meta: {
              title: '综合报表',
              icon: 'report-form'
            }
          }
        ]
      },
      {
        path: 'gsp',
        name: 'HGsp',
        redirect: '/headquarters/gsp/subsidiary',
        component: () => import('@/views/headquarters/gsp/index.vue'),
        meta: {
          title: 'GSP审计',
          icon: ''
        },
        children: [
          {
            path: 'subsidiary',
            name: 'HGspSubsidiary',
            redirect: '/headquarters/gsp/subsidiary/list',
            component: () => import('@/views/headquarters/gsp/subsidiary/index.vue'),
            meta: {
              title: '子公司审计',
              icon: 'business'
            },
            children: [
              {
                path: 'list',
                name: 'HGspSubsidiaryList',
                component: () => import('@/views/headquarters/gsp/subsidiary/list/index.vue'),
                meta: {
                  hidden: true
                }
              },
              {
                path: 'edit',
                name: 'HGspSubsidiaryEdit',
                component: () => import('@/views/headquarters/gsp/subsidiary/edit/index.vue'),
                meta: {
                  title: '添加审计记录',
                  noKeepAlive: true,
                  hidden: true
                }
              },
              {
                path: 'detail',
                name: 'HGspSubsidiaryDetail',
                component: () => import('@/views/headquarters/gsp/subsidiary/detail/index.vue'),
                meta: {
                  title: '详情',
                  noKeepAlive: true,
                  hidden: true
                }
              }
            ]
          },
          {
            path: 'franchiser',
            name: 'HGspFranchiser',
            redirect: '/headquarters/gsp/franchiser/list',
            component: () => import('@/views/headquarters/gsp/franchiser/index.vue'),
            meta: {
              title: '门店GSP审计',
              icon: 'franchiser'
            },
            children: [
              {
                path: 'list',
                name: 'HGspFranchiserList',
                component: () => import('@/views/headquarters/gsp/franchiser/list/index.vue'),
                meta: {
                  hidden: true
                }
              },
              {
                path: 'edit',
                name: 'HGspFranchiserEdit',
                component: () => import('@/views/headquarters/gsp/franchiser/edit/index.vue'),
                meta: {
                  title: '添加审计记录',
                  noKeepAlive: true,
                  hidden: true
                }
              },
              {
                path: 'detail',
                name: 'HGspFranchiserDetail',
                component: () => import('@/views/headquarters/gsp/franchiser/detail/index.vue'),
                meta: {
                  title: '详情',
                  noKeepAlive: true,
                  hidden: true
                }
              }
            ]
          },
          {
            path: 'warehouse',
            name: 'HGspWarehouse',
            redirect: '/headquarters/gsp/warehouse/list',
            component: () => import('@/views/headquarters/gsp/warehouse/index.vue'),
            meta: {
              title: '仓库GSP审计',
              icon: 'warehouse'
            },
            children: [
              {
                path: 'list',
                name: 'HGspWarehouseList',
                component: () => import('@/views/headquarters/gsp/warehouse/list/index.vue'),
                meta: {
                  hidden: true
                }
              },
              {
                path: 'edit',
                name: 'HGspWarehouseEdit',
                component: () => import('@/views/headquarters/gsp/warehouse/edit/index.vue'),
                meta: {
                  title: '添加审计记录',
                  noKeepAlive: true,
                  hidden: true
                }
              },
              {
                path: 'detail',
                name: 'HGspWarehouseDetail',
                component: () => import('@/views/headquarters/gsp/warehouse/detail/index.vue'),
                meta: {
                  title: '详情',
                  noKeepAlive: true,
                  hidden: true
                }
              }
            ]
          },
          {
            path: 'clause',
            name: 'HGspClause',
            redirect: '/headquarters/gsp/clause/list',
            component: () => import('@/views/headquarters/gsp/clause/index.vue'),
            meta: {
              title: '条款号管理',
              icon: 'license'
            },
            children: [
              {
                path: 'list',
                name: 'HGspClauseList',
                component: () => import('@/views/headquarters/gsp/clause/list/index.vue'),
                meta: {
                  hidden: true
                }
              },
              {
                path: 'detail',
                name: 'HGspClauseDetail',
                component: () => import('@/views/headquarters/gsp/clause/detail/index.vue'),
                meta: {
                  title: '详情',
                  noKeepAlive: true,
                  hidden: true
                }
              }
            ]
          }
        ]
      },
      {
        path: 'drug',
        name: 'HDrug',
        redirect: '/headquarters/drug/drug',
        component: () => import('@/views/subsidiary/drug/index.vue'),
        meta: {
          title: '药监检查',
          icon: ''
        },
        children: [
          {
            path: 'drug',
            name: 'HDrugDrug',
            redirect: '/headquarters/drug/drug/list',
            component: () => import('@/views/subsidiary/drug/drug/index.vue'),
            meta: {
              title: '药监检查',
              icon: 'license'
            },
            children: [
              {
                path: 'list',
                name: 'HDrugList',
                component: () => import('@/views/subsidiary/drug/drug/list/index.vue'),
                meta: {
                  hidden: true
                }
              }
            ]
          }
        ]
      }
    ]
  },
  subsidiary: {
    path: '/subsidiary',
    name: 'Subsidiary',
    redirect: '/subsidiary/base',
    component: Layout,
    children: [
      {
        path: 'base',
        name: 'SBase',
        redirect: '/subsidiary/base/business',
        component: () => import('@/views/subsidiary/base/index.vue'),
        meta: {
          title: '基本信息管理',
          icon: ''
        },
        children: [
          {
            path: 'business',
            name: 'SBaseBusiness',
            component: () => import('@/views/subsidiary/base/business/index.vue'),
            meta: {
              title: '企业基本信息',
              icon: 'business'
            },
            children: []
          },
          {
            path: 'license',
            name: 'SBaseLicense',
            component: () => import('@/views/subsidiary/base/license/index.vue'),
            meta: {
              title: '营业执照',
              icon: 'license'
            },
            children: [
            ]
          },
          {
            path: 'drugs',
            name: 'SBaseDrugs',
            component: () => import('@/views/subsidiary/base/drugs/index.vue'),
            meta: {
              title: '药品经营许可证',
              icon: 'drugs'
            },
            children: [
            ]
          },
          {
            path: 'appliance',
            name: 'SBaseAppliance',
            component: () => import('@/views/subsidiary/base/appliance/index.vue'),
            meta: {
              title: '医疗器械经营许可证',
              icon: 'license'
            },
            children: [
            ]
          },
          {
            path: 'second',
            name: 'SBaseSecond',
            component: () => import('@/views/subsidiary/base/second/index.vue'),
            meta: {
              title: '第二类医疗器械备案凭证',
              icon: 'license'
            },
            children: [
            ]
          },
          {
            path: 'internet',
            name: 'SBaseInternet',
            component: () => import('@/views/subsidiary/base/internet/index.vue'),
            meta: {
              title: '互联网药品信息服务资格证书',
              icon: 'license'
            },
            children: [
            ]
          },
          {
            path: 'quality',
            name: 'SBaseQuality',
            component: () => import('@/views/subsidiary/base/quality/index.vue'),
            meta: {
              title: '药品质量负责人',
              icon: 'quality'
            },
            children: []
          },
          {
            path: 'control',
            name: 'SBaseControl',
            redirect: '/subsidiary/base/control/list',
            component: () => import('@/views/subsidiary/base/control/index.vue'),
            meta: {
              title: '质管人员',
              icon: 'quality'
            },
            children: [
              {
                path: 'list',
                name: 'SBaseControlList',
                component: () => import('@/views/subsidiary/base/control/list/index.vue'),
                meta: {
                  hidden: true
                }
              },
              {
                path: 'add',
                name: 'SBaseControlAdd',
                component: () => import('@/views/subsidiary/base/control/add/index.vue'),
                meta: {
                  title: '添加',
                  hidden: true,
                  noKeepAlive: true
                }
              },
              {
                path: 'edit',
                name: 'SBaseControlEdit',
                component: () => import('@/views/subsidiary/base/control/edit/index.vue'),
                meta: {
                  title: '修改',
                  hidden: true,
                  noKeepAlive: true
                }
              },
              {
                path: 'detail',
                name: 'SBaseControlDetail',
                component: () => import('@/views/subsidiary/base/control/detail/index.vue'),
                meta: {
                  title: '详情',
                  hidden: true,
                  noKeepAlive: true
                }
              }
            ]
          },
          {
            path: 'certificate',
            name: 'SBaseCertificate',
            redirect: '/subsidiary/base/certificate/list',
            component: () => import('@/views/subsidiary/base/certificate/index.vue'),
            meta: {
              title: '办证人员',
              icon: 'quality'
            },
            children: [
              {
                path: 'list',
                name: 'SBaseCertificateList',
                component: () => import('@/views/subsidiary/base/certificate/list/index.vue'),
                meta: {
                  hidden: true
                }
              },
              {
                path: 'add',
                name: 'SBaseCertificateAdd',
                component: () => import('@/views/subsidiary/base/certificate/add/index.vue'),
                meta: {
                  title: '添加',
                  hidden: true,
                  noKeepAlive: true
                }
              },
              {
                path: 'edit',
                name: 'SBaseCertificateEdit',
                component: () => import('@/views/subsidiary/base/certificate/edit/index.vue'),
                meta: {
                  title: '修改',
                  hidden: true,
                  noKeepAlive: true
                }
              },
              {
                path: 'detail',
                name: 'SBaseCertificateDetail',
                component: () => import('@/views/subsidiary/base/certificate/detail/index.vue'),
                meta: {
                  title: '详情',
                  hidden: true,
                  noKeepAlive: true
                }
              }
            ]
          }
        ]
      },
      {
        path: 'drug',
        name: 'SDrug',
        redirect: '/subsidiary/drug/drug',
        component: () => import('@/views/subsidiary/drug/index.vue'),
        meta: {
          title: '药监检查',
          icon: ''
        },
        children: [
          {
            path: 'drug',
            name: 'SDrugDrug',
            redirect: '/subsidiary/drug/drug/list',
            component: () => import('@/views/subsidiary/drug/drug/index.vue'),
            meta: {
              title: '药监检查',
              icon: 'license'
            },
            children: [
              {
                path: 'list',
                name: 'SDrugList',
                component: () => import('@/views/subsidiary/drug/drug/list/index.vue'),
                meta: {
                  hidden: true
                }
              },
              {
                path: 'edit',
                name: 'SDrugEdit',
                component: () => import('@/views/subsidiary/drug/drug/edit/index.vue'),
                meta: {
                  title: '新增记录',
                  noKeepAlive: true,
                  hidden: true
                }
              }
            ]
          }
        ]
      }
    ]
  }
}
