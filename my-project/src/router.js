const Index = () => import('./_pages/index')

export default[
  {
    path: '/',
    name: '/',
    redirect: '/index',
    components: Index
  }
]