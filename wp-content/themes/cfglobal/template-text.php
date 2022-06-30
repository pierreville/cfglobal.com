<?php
/*
Template Name: Text Page
*/

$data = Timber::get_context();
$post = new TimberPost();
$data['post'] = $post;

Timber::render('/templates/text.twig', $data);
