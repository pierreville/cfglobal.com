<?php
define('WP_AUTO_UPDATE_CORE', false);// This setting is required to make sure that WordPress updates can be properly managed in WordPress Toolkit. Remove this line if this WordPress instance is not managed by WordPress Toolkit anymore.
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', "cfglobal" );

/** MySQL database username */
define( 'DB_USER', "root" );

/** MySQL database password */
define( 'DB_PASSWORD', "" );

/** MySQL hostname */
define( 'DB_HOST', "localhost" );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '4izug|Gpc&8-9u/5zoAbcU4TPGRH[Z5;IzIli+4&sYy3_|v6a%fk2cNsiVa4/~9&');
define('SECURE_AUTH_KEY', 'd/0ig0n~e4!hLL&LHE15&L3[7;oUfTPn(%E9:AVEz20i)5K9)y;;EaE&iE/7o-ey');
define('LOGGED_IN_KEY', 'YC#|~Q:O*(t8#dj7JhQrn1+J38;093Pi:*9I&C|QR1G/hnC8@kun/~_c89L!a_pT');
define('NONCE_KEY', '5~1i44Nanc9tr*058yg&h]VM057b-8Q&Y*7u6];ltpb)lfn92)f/2!ZUigfimkAN');
define('AUTH_SALT', '9YPJ_*tfs+Dlo@q!ZDgyvNuF#(KQB)enau(R~kDvY3+Xv9ljf@a2;K1u01+7(0w_');
define('SECURE_AUTH_SALT', 'rmjxu7a4LVh&/F!h_8f6+;@y*TQv5@077H|[X1m_/z2H0[SATGL6|0~17[lrN*h5');
define('LOGGED_IN_SALT', '4OlZ||G9G|6T2Bl+xsfa1aQ0[c!q&ouq0NOKvn[|O2!c~@7%Qshk2oZ2k9%gnJGU');
define('NONCE_SALT', '6J_2j9qn%5yH4L0h)X3oMUVdc449s4A~VsU5HY87x70+:Kb9BD(~a0P6p6~:I)fe');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = '5TrV2mN4_';


define( 'AUTOSAVE_INTERVAL', 300 );
define( 'WP_POST_REVISIONS', 5 );
define( 'EMPTY_TRASH_DAYS', 7 );
define( 'WP_CRON_LOCK_TIMEOUT', 120 );
/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

if (!defined('WP_ENV')) {
  // Fallback if WP_ENV isn't defined in your WordPress config
  // Used to check for 'development' or 'production'
  define('WP_ENV', 'development');
}