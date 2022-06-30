<?php

$data = Timber::get_context();
$post = new TimberPost();
$data['post'] = $post;

$args = array(
    'post_type'        => 'user-story',
    'post_status'      => 'publish',
    'order'			   => 'DSC',
    'posts_per_page'   => 10,
    'orderby'		   => 'date',
    'post_parent'	   => 0,
	'post__not_in'     => array($post->ID)
);

$data['sidebar_stories'] = Timber::get_posts($args);

Timber::render('single-user-story.twig', $data);
