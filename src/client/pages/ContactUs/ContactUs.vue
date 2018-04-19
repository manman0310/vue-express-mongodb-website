<template>
    <div style="width: 94%;margin-left: 6%;background-color: white;box-shadow: rgba(0, 0, 0, 0.1) 2px 2px 4px 0px;">
        <div class="ibox">
            <div class="ibox-title" style="background-color: rgb(89, 180, 164);color:  white;">
                <h5>Contact Us</h5>
            </div>
            <div class="ibox-content">
                <table class="table table-stripped small m-t-md" style='margin-top:8px;margin-bottom:0px'>
                    <tbody>
                        <tr>
                            <td class="no-borders">
                                <i class="fa fa-phone-square text-navy" style="position:relative;top:4px"></i>
                            </td>
                            <td class="no-borders">
                                <span class='inline-span'>
                                                                            Tel： +86 13165106386
                                                            </span><br/>
                                <span class='inline-span'>
                                                                            Mobile： +86 0531 82713137
                                                                            </span>
                            </td>
                        </tr>
                        <tr>
                            <td class="no-borders">
                                <i class="fa fa-wechat text-navy"></i>
                            </td>
                            <td class="no-borders">
                                +86 13165106386
                            </td>
                        </tr>
                        <tr>
                            <td class="no-borders">
                                <i class="fa fa-facebook-square text-navy"></i>
                            </td>
                            <td class="no-borders">
                                facebook
                            </td>
                        </tr>
                        <tr>
                            <td class="no-borders">
                                <i class="fa fa-skype text-navy"></i>
                            </td>
                            <td class="no-borders">
                                skype
                            </td>
                        </tr>
                        <tr>
                            <td class="no-borders">
                                <i class="fa fa-envelope text-navy" style="position:relative;top:4px"></i>
                            </td>
                            <td class="no-borders">
                                <span class='inline-span'>1515219700@qq.com</span><br/>
                                <span class='inline-span'><a href="mailto:1515219700@qq.com" class='btn btn-primary btn-outline btn-xs'><i class='fa fa-send-o'></i>&nbsp;&nbsp;&nbsp;{{email.e1}}</a></span><br/>
                                <span class='inline-span'><button class="btn btn-primary btn-outline btn-xs" id='email-btn' data-clipboard-text="1515219700@qq.com"><i class='fa fa-copy'></i>&nbsp;&nbsp;&nbsp;{{email.e2}}</button></span>
                            </td>
                        </tr>
                        <tr>
                            <td class="no-borders">
                                <i class="fa fa-building text-navy" style="position:relative;top:4px"></i>
                            </td>
                            <td class="no-borders">
                                <address>Factory address: Blk 10, Pengjiang district, Jiangmen city, Guagndong province, China </address>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    import Clipboard from 'clipboard'
    // import toastr from '../../../static/js/plugins/toastr/toastr.min.js'
    export default {
        name: "contact-us",
        data: function() {
            return {
                email: {
                    e1: "Sending email directly",
                    e2: "Copy email address"
                }
            }
        },
        created: function() {
            // toastr.options = {
            //     "closeButton": true,
            //     "debug": false,
            //     "progressBar": false,
            //     "preventDuplicates": true,
            //     "positionClass": "toast-top-left",
            //     "onclick": null,
            //     "showDuration": "400",
            //     "hideDuration": "1000",
            //     "timeOut": "2000",
            //     "extendedTimeOut": "1000",
            //     "showEasing": "swing",
            //     "hideEasing": "linear",
            //     "showMethod": "fadeIn",
            //     "hideMethod": "fadeOut"
            // }
            let clipboard = new Clipboard('#email-btn')
            let curThis = this
            clipboard.on('success', function(e) {
                // console.info('Action:', e.action);
                // console.info('Text:', e.text);
                // console.info('Trigger:', e.trigger);
                e.clearSelection();
                // toastr['success']("success!", "Copied to the clipboard")
            });
        }
    };
</script>


<style lang="css">
    .fonts {
        line-height: 40px;
        font-size: 14px;
        padding: 45px;
    }
    .text-navy {
        zoom: 150%
    }
    .inline-span {
        display: inline-block;
        height: 24px;
        line-height: 24px;
    }
</style>