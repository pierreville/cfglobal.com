<?php

$data = Timber::get_context();
$data['posts'] = Timber::get_posts();
Timber::render('index.twig', $data);
