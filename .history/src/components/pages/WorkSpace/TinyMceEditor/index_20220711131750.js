import React, { useEffect } from "react";

// TinyMCE so the global var exists
// eslint-disable-next-line no-unused-vars
import tinymce from 'tinymce/tinymce'

import "tinymce/models/dom"
import 'tinymce/skins/ui/oxide-dark/skin.css';

// Theme
import 'tinymce/themes/silver';
// Toolbar icons
import 'tinymce/icons/default';
// Editor styles
import "tinymce/plugins/advlist";
import "tinymce/plugins/anchor"
import "tinymce/plugins/autolink"
import "tinymce/plugins/autoresize"
import "tinymce/plugins/autosave"
import "tinymce/plugins/charmap"
import "tinymce/plugins/code"
import "tinymce/plugins/codesample"
import "tinymce/plugins/directionality"
import "tinymce/plugins/fullscreen"
import "tinymce/plugins/help"
import "tinymce/plugins/image"
import "tinymce/plugins/importcss"
import "tinymce/plugins/insertdatetime"
import "tinymce/plugins/link"
import "tinymce/plugins/lists"
import "tinymce/plugins/media"
import "tinymce/plugins/nonbreaking"
import "tinymce/plugins/pagebreak"
import "tinymce/plugins/preview"
import "tinymce/plugins/quickbars"
import "tinymce/plugins/save"
import "tinymce/plugins/searchreplace"
import "tinymce/plugins/table"
import "tinymce/plugins/template"
import "tinymce/plugins/visualblocks"
import "tinymce/plugins/visualchars"
import "tinymce/plugins/wordcount"


const TinyMceEditor = (props) => {
    const { state, setState } = props;

    const isSmallScreen = window.matchMedia('(max-width: 1023.5px)').matches;

    useEffect(() => {
        const TinyInit = () => {
            tinymce.init({
                selector: 'textarea#full-featured',
                plugins: 'preview  importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars ',
                tinydrive_token_provider: 'URL_TO_YOUR_TOKEN_PROVIDER',
                tinydrive_dropbox_app_key: 'YOUR_DROPBOX_APP_KEY',
                tinydrive_google_drive_key: 'YOUR_GOOGLE_DRIVE_KEY',
                tinydrive_google_drive_client_id: 'YOUR_GOOGLE_DRIVE_CLIENT_ID',
                mobile: {
                    plugins: 'preview  importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars'
                },
                menu: {
                    tc: {
                        title: 'Comments',
                        items: 'addcomment showcomments deleteallconversations'
                    }
                },
                menubar: 'file edit view insert format tools table tc help',
                toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor  permanentpen removeformat | pagebreak | charmap | fullscreen  preview save print | insertfile image media template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
                toolbar_sticky: true,
                toolbar_sticky_offset: isSmallScreen ? 102 : 108,
                autosave_ask_before_unload: true,
                autosave_interval: '30s',
                autosave_prefix: '{path}{query}-{id}-',
                autosave_restore_when_empty: false,
                autosave_retention: '2m',
                image_advtab: true,
                emoticons_images_url: 'http://my.server/images/emoticons/',
                link_list: [
                    { title: 'My page 1', value: 'https://www.tiny.cloud' },
                    { title: 'My page 2', value: 'http://www.moxiecode.com' }
                ],
                image_list: [
                    { title: 'My page 1', value: 'https://www.tiny.cloud' },
                    { title: 'My page 2', value: 'http://www.moxiecode.com' }
                ],
                image_class_list: [
                    { title: 'None', value: '' },
                    { title: 'Some class', value: 'class-name' }
                ],
                importcss_append: true,
                templates: [
                    { title: 'New Table', description: 'creates a new table', content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>' },
                    { title: 'Starting my story', description: 'A cure for writers block', content: 'Once upon a time...' },
                    { title: 'New list with dates', description: 'New List with dates', content: '<div class="mceTmpl"><span class="cdate">cdate</span><br><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>' }
                ],
                template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
                template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
                height: 600,
                image_caption: true,
                quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                noneditable_class: 'mceNonEditable',
                toolbar_mode: 'sliding',
                spellchecker_ignore_list: ['Ephox', 'Moxiecode'],
                tinycomments_mode: 'embedded',
                content_style: '.full-featured{ color: gray; }',
                contextmenu: 'link image table configurepermanentpen',
                a11y_advanced_options: true,
                skin: "oxide-dark",
                content_css: "dark",
                branding: false,
            });
        }
        TinyInit();
        console.log("Tiny Inited");
    }, [])

    return (
        <div className="flex justify-center max-h-[calc(100vh-112px)] w-[65%] overflow-y-auto" >
            <textarea id="full-featured">

            </textarea>
        </div>

    );
}

export default TinyMceEditor;