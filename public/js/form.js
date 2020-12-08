$().ready(function () {
    $('#send').click(function () {
        var index = parent.layer.getFrameIndex(window.name);
        let tutor = $('#tutor').val();
        let grade = $('#grade').val();
        let major = $('#major').val();
        var imgFile = $('#fupPhoto')[0].files[0];
        let info = $('#info').val()
        // let info = editor.txt.html();
        if(tutor == ''){
            alert('tutor is null')
        }else if(grade == ''){
            alert('grade is null')
        }else if(imgFile == undefined){
            alert('Please submit pictures')
        }else if(info == ''){
            alert('detail is null')
        }else if(major == ''){
            alert('major is null');
        }
        let data = new FormData();
        data.append('tutor', tutor);
        data.append('imgFile', imgFile);
        data.append('info', info);
        data.append('grade', grade);
        data.append('major', major);
        
        $.ajax({
            url: 'add',
            type: 'post',
            data,
            processData: false,
            contentType: false,
            success: function (res) {
                if(res.status == 200){
                    layer.msg('successfully added');
                    setTimeout(function(){
                        parent.layer.close(index);
                    }, 1250)
                }
            },
            error: function (e) {
                console.log(e.responseJSON.message);
            }
        })
    })
    $('#fupPhoto').change(function () {
        var imgFile = $('#fupPhoto')[0].files[0];
        var objFile = getObjectURL(imgFile);
        $('#showImg').attr('src', objFile).show();
    })
    function getObjectURL(file) {

        var url = null;

        if (window.createObjectURL != undefined) { // basic

            url = window.createObjectURL(file);

        } else if (window.URL != undefined) { // mozilla(firefox)

            url = window.URL.createObjectURL(file);

        } else if (window.webkitURL != undefined) { // webkit or chrome

            url = window.webkitURL.createObjectURL(file);

        }

        return url;

    }
})