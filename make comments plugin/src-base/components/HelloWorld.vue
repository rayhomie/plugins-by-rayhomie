<!--子组件-->
<template>
    <div>
      <p class="msg">{{msg}}</p>
    </div>
</template>

<script>
    export default {//配置对象（与Vue一致）
      data(){//必须写函数
        return {msg:'helloworld'}

      }

    }
</script>

<style>
.msg{
  color: red;
  font-size: 30px;
}
</style>
