<?php

$data = Timber::get_context();
$post = new TimberPost();
$data['post'] = $post;

// Get sidebar categories
$data['sidebar_categories'] = get_terms(array(
		'taxonomy' => 'category',
		'hide_empty' => 'false'
));

// Paginate sidebar posts on same page
if (isset($_GET['sb-pg'])) {
	$sb_page = $_GET['sb-pg'];
} else {
	$sb_page = 1;
}

// Set sidebar posts per page
$sb_ppp = 8;

// Get sidebar posts
$args = array(
    'post_type'        => 'post',
    'post_status'      => 'publish',
    'order'			   => 'DSC',
    'posts_per_page'   => $sb_ppp,
	'paged'			   => $sb_page,
    'orderby'		   => 'date',
    'post_parent'	   => 0
);

$data['sidebar_news'] = Timber::get_posts($args);
$total = wp_count_posts()->publish;
$data['sidebar_news_total'] = ceil($total / $sb_ppp);
$data['sidebar_current_page'] = $sb_page;

Timber::render('single.twig', $data);
