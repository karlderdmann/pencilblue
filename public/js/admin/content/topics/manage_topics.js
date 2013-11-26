$(document).ready(function()
{
    new jNarrow('#topic_search', '.topic',
    {
        searchChildElement: '.topic_name',
        searchButton: '#topic_search_button',
        searchText: '<i class="fa fa-search"></i>',
        clearText: '<i class="fa fa-times"></i>',
    });
});

function confirmDeleteTopic(siteRoot, topicID, topicName)
{
    $('#delete_name').html(topicName);
    $('#delete_button').attr('onclick', 'window.location = "' + siteRoot + '/actions/admin/content/topics/deleteTopic?id=' + topicID + '"');
    $('#confirm_delete_modal').modal({backdrop: 'static', keyboard: true});
}