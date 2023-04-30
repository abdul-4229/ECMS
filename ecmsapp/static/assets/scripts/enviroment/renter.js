$(document).ready(function() {
    readRenter();
    createRenter();
    EditRenter();
})

function createRenter(){
    $('#registerForm').submit(function (e){
        e.preventDefault();

        $Name = $('#name').val();
        $Tell = $('#tell').val();
        $MartialStatus = $('#martial_status').val();
        $status = 0

        if($Name != null && $Tell != null && $MartialStatus != null && $status == 0) {
            
            // console.log($District + " " + $Type + " " + $RenterNo+ " " + $status)
            $.ajax({
                url: '',
                type: "POST",
                data: {
                    'name': $Name,
                    'tell': $Tell,
                    'martial_status': $MartialStatus,
                    'status': $status,
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()                    
                },
                success: function(data) {
                    swal({
                        title: "Success !",
                        text: "You have successfully Created",
                        icon: "success",
                        timer: 1000, // time in milliseconds
                        timerProgressBar: true,
                        showConfirmButton: false
                    })
                    .then(function(){

                        $('#newRenter').hide();
                        readRenter()
                        location.reload();
                    })

                },
                error:function(data){
                    swal({
                        title: "Error !",
                        text: "There was an error: "+data,
                        icon: "error",
                        timer: 4000, // time in milliseconds
                        timerProgressBar: true,
                        showConfirmButton: false
                    })
                }
            })

            
        }
        else{
            swal({
                title: "Error !",
                text: "There was an error for Saving",
                icon: "error",
                timer: 4000, // time in milliseconds
                timerProgressBar: true,
                showConfirmButton: false
            })
        }


    })
}

function readRenter(){

    $.ajax({
        url: "Renter/",
        type: "POST",
        async: false,
        data:{
            res : 1,
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },
        success: function(response){
            $('#tbody_data').html(response)
        }
    })

}

function EditRenter(){
    $('.RenterEdit').click(function(){
        $id = $(this).data('id');
        $name = $(this).data('name');
        $tell = $(this).data('tell');
        $martial_status = $(this).data('martial_status');

        $('#updateRenter').modal('show');

        $("#uid").val($id)
        $("#uname").val($name)
        $("#utell").val($tell)
        $("#umartial_status").val($martial_status)


        $('#updateForm').submit(function (e) {
            e.preventDefault();

            $new_id = $("#uid").val()
            $new_name = $("#uname").val()
            $new_tell = $("#utell").val()
            $new_martial = $("#umartial_status").val()




            $.ajax({
                url: '/updateRenter/',
                type: "POST",
                data: {
                    'id': $new_id,
                    'name': $new_name,
                    'tell': $new_tell,
                    'martial_status': $new_martial,
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val() 
                },
              
                success: function(data) {
                  
                    swal("Success", data, "success")
                    .then(function(){
                        $('#UpdateRenter').hide();
                        readRenter()
                        location.reload();
                    })

                },
                error: function(data){
                   
                    swal("Error", data, "error");
                }
            })

        })


        
    })
}