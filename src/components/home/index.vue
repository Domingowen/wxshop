<template>
  <div>
    <home-banner>
      <li><img src="../../assets/img/home/1.jpg" alt=""></li>
      <li><img src="../../assets/img/home/2.jpg" alt=""></li>
      <li><img src="../../assets/img/home/3.jpg" alt=""></li>
      <li><img src="../../assets/img/home/4.jpg" alt=""></li>
    </home-banner>
    <home-slide :slideOpt="slideOpt_first">
      <li><img src="../../assets/img/home/1.png" alt=""></li>
      <li><img src="../../assets/img/home/2.png" alt=""></li>
      <li><img src="../../assets/img/home/3.png" alt=""></li>
      <li><img src="../../assets/img/home/4.png" alt=""></li>
    </home-slide>
    <home-list :list="listData">
    </home-list>
  </div>
</template>
<script>
import HomeBanner from '@/components/home/children/home-banner'
import HomeSlide from '@/components/home/children/slide'
import HomeList from '@/components/home/children/home-list'

export default {
  name: 'index',
  data () {
    return {
      listData: [
        {
          title: '考拉妈妈',
          price: '2000',
          imgUrl: 'http://yanxuan.nosdn.127.net/f1a570939dfc9c688cd17dc25463da07.png?imageView&quality=65&thumbnail=330x330',
          saleStatus: 1,
          id: 1
        },
        {
          title: '考拉妈妈',
          price: '2000',
          imgUrl: 'http://yanxuan.nosdn.127.net/f1a570939dfc9c688cd17dc25463da07.png?imageView&quality=65&thumbnail=330x330',
          saleStatus: 1,
          id: 2
        },
        {
          title: '考拉妈妈',
          price: '2000',
          imgUrl: 'http://yanxuan.nosdn.127.net/f1a570939dfc9c688cd17dc25463da07.png?imageView&quality=65&thumbnail=330x330',
          saleStatus: 2,
          id: 3
        },
        {
          title: '考拉妈妈',
          price: '2000',
          imgUrl: 'http://yanxuan.nosdn.127.net/f1a570939dfc9c688cd17dc25463da07.png?imageView&quality=65&thumbnail=330x330',
          saleStatus: 2,
          id: 4
        },
        {
          title: '考拉妈妈',
          price: '2000',
          imgUrl: 'http://yanxuan.nosdn.127.net/f1a570939dfc9c688cd17dc25463da07.png?imageView&quality=65&thumbnail=330x330',
          saleStatus: 2,
          id: 5
        },
        {
          title: '考拉妈妈',
          price: '2000',
          imgUrl: 'http://yanxuan.nosdn.127.net/f1a570939dfc9c688cd17dc25463da07.png?imageView&quality=65&thumbnail=330x330',
          saleStatus: 2,
          id: 6
        },
        {
          title: '考拉妈妈',
          price: '2000',
          imgUrl: 'http://yanxuan.nosdn.127.net/f1a570939dfc9c688cd17dc25463da07.png?imageView&quality=65&thumbnail=330x330',
          saleStatus: 1,
          id: 7
        },
        {
          title: '考拉妈妈',
          price: '2000',
          imgUrl: 'http://yanxuan.nosdn.127.net/f1a570939dfc9c688cd17dc25463da07.png?imageView&quality=65&thumbnail=330x330',
          saleStatus: 3,
          id: 8
        },
        {
          title: '考拉妈妈',
          price: '2000',
          imgUrl: 'http://yanxuan.nosdn.127.net/f1a570939dfc9c688cd17dc25463da07.png?imageView&quality=65&thumbnail=330x330',
          saleStatus: 3,
          id: 9
        },
        {
          title: '考拉妈妈',
          price: '2000',
          imgUrl: 'http://yanxuan.nosdn.127.net/f1a570939dfc9c688cd17dc25463da07.png?imageView&quality=65&thumbnail=330x330',
          saleStatus: 3,
          id: 10
        }
      ],
      slideOpt_first: {
        direction: 'x'
      },
      slideOpt_second: {
        direction: 'y'
      }
    }
  },
  components: {
    HomeBanner,
    HomeSlide,
    HomeList
  },
  mounted () {
  }
}
</script>
<style scoped lang="scss">
  .bannerbox {

  }
</style>
