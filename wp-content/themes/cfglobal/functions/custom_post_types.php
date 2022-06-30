<?php
/**
 * Define custom [NAME]s
 *
 * @since FTC 1.0
 * @return void
 */

function custom_post_type() {

	$labels = array(
	   'name'               => _x( 'User Story', 'User Story general name', 'your-plugin-textdomain' ),
	   'singular_name'      => _x( 'User Story', 'User Story singular name', 'your-plugin-textdomain' ),
	   'menu_name'          => _x( 'User Stories', 'admin menu', 'your-plugin-textdomain' ),
	   'name_admin_bar'     => _x( 'User Stories', 'add new on admin bar', 'your-plugin-textdomain' ),
	   'add_new'            => _x( 'Add New', 'User Story', 'your-plugin-textdomain' ),
	   'add_new_item'       => __( 'Add User Story', 'your-plugin-textdomain' ),
	   'new_item'           => __( 'New User Story', 'your-plugin-textdomain' ),
	   'edit_item'          => __( 'Edit User Story', 'your-plugin-textdomain' ),
	   'view_item'          => __( 'View User Story', 'your-plugin-textdomain' ),
	   'all_items'          => __( 'All User Stories', 'your-plugin-textdomain' ),
	   'search_items'       => __( 'Search User Stories', 'your-plugin-textdomain' ),
	   'parent_item_colon'  => __( 'Parent User Story:', 'your-plugin-textdomain' ),
	   'not_found'          => __( 'No User Stories found.', 'your-plugin-textdomain' ),
	   'not_found_in_trash' => __( 'No User Stories found in Trash.', 'your-plugin-textdomain' )
	);

	$args = array(
	   'labels'             => $labels,
	   'public'             => true,
	   'publicly_queryable' => true,
	   'show_ui'            => true,
	   'show_in_menu'       => true,
	   'query_var'          => true,
	   'capability_type'    => 'post',
	   'menu_icon' => 'dashicons-book',
	   'rewrite'            => array( 'slug' => 'user-stories' ),
	   'map_meta_cap'       => true,
	   'has_archive'        => false,
	   'hierarchical'       => true,
	   'menu_position'      => null,
	   'with_front'			=> false
	);

	register_post_type('user-story', $args);

}
