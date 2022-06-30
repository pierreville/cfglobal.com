<?php
$data = Timber::get_context();
$post = new TimberPost();
$data['post'] = $post;

$args = array(
    'post_type'        => 'user-story',
    'post_status'      => 'publish',
    'order'			   => 'DSC',
    'posts_per_page'   => 4,
    'orderby'		   => 'date',
    'post_parent'	   => 0
);

$data['recent_stories'] = Timber::get_posts($args);

Timber::render('home.twig', $data);
