<template>
<div>
<!-- Main content -->
    <section class="content">
    <div class="row justify-content-around">
        <div class="col-8">
            <div class="card">
                <div class="card-header">
                <h3 class="card-title">Category List</h3>

                <div class="card-tools">
                    <router-link to="/add-category" style="color: #FFF;">
                        <button class="btn btn-primary"> Add Category</button>
                    </router-link>

                </div>
                </div>

                <!-- /.card-header -->
                <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                    <thead>
                    <tr>
                    <th>SN</th>
                    <th>Category Name</th>
                    <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>1</td>
                    <td>{{getallCategory}}</td>
                    <td>
                        <a href="#">Edit</a>
                        <a href="#">Delete</a>
                    </td>
                    </tr>
                    </tbody>
                </table>
                </div>
                <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
<!-- End Main content -->
</div>
</template>

<script>
export default {
    name: 'List',
    mounted(){
        return this.$store.dispatch("allCategory")
    },
    computed:{
        getallCategory(){
            return this.$store.getters.getCategory
        }
    },
    methods:{

    }
}
</script>

<style scoped>

</style>
