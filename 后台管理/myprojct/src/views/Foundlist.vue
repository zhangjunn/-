<template>
  <div class="fillcontain">
    <HeadNav></HeadNav>
    <LeftMenu></LeftMenu>
    <div class="rightContainer" style="margin :5px;">
      <router-view></router-view>
      <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>商品管理</el-breadcrumb-item>
          <el-breadcrumb-item>商品列表</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="margin-top:30px;">
          <el-form :inline="true" ref="add_data">
            <!-- <el-form-item>
                <el-button type="primary" size="small" icon="search" @click="jump()">筛选</el-button>
              </el-form-item> -->
            <el-form-item class="btnRight">
              <el-button type="primary" size="small" icon="view" @click="handleAdd()">添加</el-button>
            </el-form-item>
          </el-form>
          <!-- <el-button  type="primary" plain icon="el-icon-edit" style="margin-left:5px;"  @click="jump()">添 加</el-button> -->
          <!-- <el-button type="danger" plain icon="el-icon-delete" style="margin-left:5px;">全部删除</el-button> -->
          <!-- tabledata就是请求的内容了数据库请求的什么就是什么    -->
        </div>
        <div class="table_container">
          <el-table :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
            v-if="tableData.length > 0" style="width: 100%" :header-cell-style="{color:'#58bc58'}" :stripe="stripe">
            <el-table-column type="selection" width="70" align='center'></el-table-column>

            <el-table-column label="时间" prop="date" align='center'>
              <template slot-scope="scope"> <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>

            <el-table-column label="店铺" prop="subname" align='center'></el-table-column>
            <el-table-column label="标题" prop="title" align='center'></el-table-column>
            <el-table-column label="浏览" prop="surf" align='center'></el-table-column>
            <el-table-column label="原价" prop="oldprice" align='center'></el-table-column>
            <el-table-column label="价格" prop="price" align='center'></el-table-column>
            <el-table-column label="库存" prop="qty" align='center'></el-table-column>
            <el-table-column align="right">
              <template slot="header" slot-scope="scope">
                <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
              </template>
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 分页 -->
          <el-row>
            <el-col :span="24">
              <div class="pagination">
                <el-pagination v-if='paginations.total > 0' @size-change="handleSizeChange"
                  @current-change="handleCurrentChange" :current-page="paginations.page_index"
                  :page-sizes="paginations.page_sizes" :page-size="paginations.page_size"
                  layout="total, sizes, prev, pager, next, jumper" :total="paginations.total">
                </el-pagination>
              </div>  
            </el-col>
          </el-row>
          
        </div>
      </div>
    </div>
    <!-- :form='form' @update="getProfile" -->
    <Dialog :dialog='dialog'></Dialog>
  </div>
</template>

<script>
  import Dialog from "../components/Dialog";
  import HeadNav from "../components/HeadNav";
  import LeftMenu from "../components/LeftMenu";
  export default {
    name: "fundlist",
    components: {
      HeadNav,
      LeftMenu,
      Dialog
    },
    data() {
      return {
        paginations: {
          page_index: 1, // 当前位于哪页
          total: 0, // 总数
          page_size: 5, // 1页显示多少条
          page_sizes: [5, 10, 15, 20], //每页显示多少条
          layout: "tatol, sizes, prev, pager, next, jumper" // 翻页属性
        },
        stripe: true,
        tableData: [],
        allTableData: [], //请求数据放到另外容器进项前端分页
        search: "",
        dialog: {
          show: false
        }
      };
    },
    methods: {

      // jump() {
      //   //跳转到添加页面
      //   this.$router.push({
      //     path: "/FoundAdd"
      //   });
      // },
      async handleDelete(index, row) {
        let {
          data
        } = await this.$axios.delete(
          `http://localhost:1906/goodsAdmin/${row._id}`
        );
        if (data.code === 1) {
          this.render();
          this.$message({
            message: "删除成功!", //消息提示
            type: "warning"
          });
        }
      },
        handleEdit(index, row) {
          this.$router.push({
            path: "/FoundEdit",
            query: {
              id: row._id
            }
          });
          //  console.log(this.$route);
        },
      getCurrentDate() {
        var timeStr = "-";
        var curDate = new Date();
        var curYear = curDate.getFullYear(); //获取完整的年份(4位,1970-????)
        var curMonth = curDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
        var curDay = curDate.getDate(); //获取当前日(1-31)
        // var curWeekDay = curDate.getDay(); //获取当前星期X(0-6,0代表星期天)
        var curHour = curDate.getHours(); //获取当前小时数(0-23)
        var curMinute = curDate.getMinutes(); // 获取当前分钟数(0-59)
        // var curSec = curDate.getSeconds(); //获取当前秒数(0-59)
        var Current =
          curYear +
          timeStr +
          curMonth +
          timeStr +
          curDay +
          " " +
          curHour +
          ":" +
          curMinute; //console.log(Current); // this.datetime=Current;
        return Current;
      },
      async render() {
        let {
          data: {
            data
          }
        } = await this.$axios.get("http://localhost:1906/goodsAdmin");
        // console.log(data);
        // this.tableData = data;  //这个是吧数据存放到当前容器
        this.allTableData = data; //现在所有数据放到另外容器 
        // this.$nextTick(function(){
        //       this.allTableData = data; 
        //       })
        //设置分页数据
        this.setPaginations();
        this.tableData.forEach(value => {
          value.date = this.getCurrentDate();
        });
      },
      setPaginations() {
        // 总页数
        this.paginations.total = this.allTableData.length; //总页数以及总页数的长度
        this.paginations.page_index = 1; //当前页数 一开始显示一页
        this.paginations.page_size = 5; //=一页显示五条  一开始显示一页显示五条数据
        // 设置默认分页数据
        this.tableData = this.allTableData.filter((item, index) => { //拿到每一条数据 以及每条数据下标
          return index < this.paginations.page_size; //下标小于当前页面值（比如一开始当前页面值为1）
        });

      },
      handleAdd() {
        this.dialog.show = true; //点击变为true false为隐藏 true为显示  
      },
      handleSizeChange(page_size) {
        // 切换size点击页数条跳转
        this.paginations.page_index = 1; //当前页数
        // paginations.page_size 注意渲染 page_size这个选择的值数据库有多少条数据总页面共显示多少条
        this.paginations.page_size = page_size;

        this.tableData = this.allTableData.filter((item, index) => {
          return index < page_size; //五条显示一页 亦可以切换十条一页

        });
        this.tableData.forEach(value => { //调用时间十条一个页面是显示时间是也要同步
          value.date = this.getCurrentDate();
        });
      },
      handleCurrentChange(page) {
        // 获取当前页面
        let sortnum = this.paginations.page_size * (page - 1); //这就是当前页面的下标了
        let table = this.allTableData.filter((item, index) => { // 这句代获取数据总数
          return index >= sortnum;
        });
        // 设置默认分页数据
        this.tableData = table.filter((item, index) => {
          return index < this.paginations.page_size;
        });
        this.tableData.forEach(value => { //调用时间
          value.date = this.getCurrentDate();
        });
      }
    },
    created() {
      this.render();
    }
  };
</script>
<style scoped>
  .fillcontain {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }

  .rightContainer {
    position: relative;
    top: 0;
    left: 180px;
    width: calc(100% - 180px);
    height: calc(100% - 71px);
    overflow: auto;
  }

  .btnRight {
    float: right;
  }

  .pagination {
    text-align: right;
    margin-top: 10px;
  }
</style>