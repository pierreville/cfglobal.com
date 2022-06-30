<?php
/*
Template Name: Resources Page
*/

$data = Timber::get_context();
$post = new TimberPost();
$data['post'] = $post;

global $paged;
if (!isset($paged) || !$paged){
    $paged = 1;
}

if ($post->slug == 'industry-news') {

	$tax_query = '';

	if ( isset($_GET['c']) ) {
		$category = $_GET['c'];
		$tax_query = array(
			array(
				'taxonomy' => 'category',
				'field' => 'slug',
				'terms' => $category
			)
		);
	}

	$args = array(
	    'post_type'        => 'post',
	    'post_status'      => 'publish',
	    'order'			   => 'DSC',
	    'posts_per_page'   => 6,
		'paged'			   => $paged,
	    'orderby'		   => 'date',
	    'post_parent'	   => 0,
		'tax_query'        => $tax_query
	);

	query_posts($args);
	$data['posts'] = Timber::get_posts();
	$data['pagination'] = Timber::get_pagination();
}

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

// Get sibling pages
$args = array(
	'post_parent' => $post->post_parent,
	'post_type' => 'page',
	'post__not_in' => array($post->ID)
);

$data['sibling_pages'] = Timber::get_posts($args);


Timber::render('/templates/resources.twig', $data);
