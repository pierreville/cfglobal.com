<?php

$data = Timber::get_context();
$post = new TimberPost();
$data['post'] = $post;

$args = array(
    'post_type'        => 'user-story',
    'post_status'      => 'publish',
    'order'			   => 'DSC',
    'posts_per_page'   => 4,
	'paged'			   => $paged,
    'orderby'		   => 'date',
    'post_parent'	   => 0
);

query_posts($args);
$data['posts'] = Timber::get_posts();
$data['pagination'] = Timber::get_pagination();

$data['introduction'] = get_field('introduction', 279);
$data['banner_image'] = get_field('banner_image', 279)['url'];
$data['has_overlay'] = get_field('has_overlay', 279);
if (get_field('title_override')) {
	$data['title'] = get_field('title_override', 279);
} else {
	$data['title'] = get_the_title(279);
}

Timber::render('user-stories.twig', $data);
