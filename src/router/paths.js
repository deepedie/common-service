// import store from '../store'
// import App from '../App.vue'
import Login from '@/views/Login/Login'
import Layout from '../components/Layout/Layout'
import Home from '../views/Home/Home.vue'
import UserManagement from '@/views/UserManagement/UserManagement'
import UserManagementForm from '@/views/UserManagement/UserManagementForm'
import GroupMaster from '@/views/GroupMaster/GroupMaster'
import UserMatrik from '@/views/GroupMaster/UserMatrik'
import MasterApprovalWorkflow from '@/views/MasterApprovalWorkflow/MasterApprovalWorkflow'
import MasterApprovalWorkflowForm from '@/views/MasterApprovalWorkflow/MasterApprovalWorkflowForm'
import ApprovalReassignment from '@/views/ApprovalReassignment/ApprovalReassignment'
import Parameter from '@/views/Parameter/Parameter'

const prefixPath = ''
export default [
    {
        path: '/',
        name: 'home',
        meta: {
            name: '',
            requiresAuth: false
        },
        component: Login,
        // redirect if already signed in
        beforeEnter: (to, from, next) => {
            // if (store.getters.authorized) {
            //     next('/home')
            // } else {
            //     next()
            // }
            next()
        }
    },
    {
        path: `${prefixPath}/login`,
        name: 'Login',
        component: Login,
        beforeEnter: (to, from, next) => {
        //   if (store.getters.authorized) {
        //     next(`${prefixPath}/home`)
        //   } else {
        //     next()
        //   }
          next()
        }
    },
    {
        path: `${prefixPath}/`,
        meta: {
          name: 'baseLayout',
          requiresAuth: true
        },
        redirect: `${prefixPath}/login`,
        name: 'layout',
        component: Layout,
        children: [
          {
            path: 'home',
            name: 'Home',
            component: Home,
          },
          {
            path: 'user-management',
            name: 'UserManagement',
            component: UserManagement
          },
          {
            path: 'user-management/:id/form',
            name: 'UserManagementForm',
            component: UserManagementForm
          },
          {
            path: 'group-master',
            name: 'GroupMaster',
            component: GroupMaster
          },
          {
            path: 'user-matrik',
            name: 'UserMatrik',
            component: UserMatrik
          },
          {
            path: 'approval-workflow',
            name: 'MasterApprovalWorkflow',
            component: MasterApprovalWorkflow
          },
          {
            path: 'approval-workflow/:id/form',
            name: 'MasterApprovalWorkflowForm',
            component: MasterApprovalWorkflowForm
          },
          {
            path: 'approval-reassignment',
            name: 'ApprovalReassignment',
            component: ApprovalReassignment
          },
          {
            path: 'parameter',
            name: 'Parameter',
            component: Parameter
          }
        ]
    }
      
]