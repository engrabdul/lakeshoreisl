<template>
<!-- Main content -->
    <section class="content">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                <h3 class="card-title">Category List</h3>

                <div class="card-tools">
                    <button class="btn btn-primary">Add Category</button>
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
                    <td>Category Name</td>
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
</template>

<script>
export default {
    name: 'List'
}
</script>

<style scoped>

</style>
