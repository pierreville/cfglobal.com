<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitfd2368103e25b49dd164ce246da68541
{
    public static $prefixLengthsPsr4 = array (
        'C' => 
        array (
            'Composer\\Installers\\' => 20,
        ),
        'A' => 
        array (
            'ACFGravityformsField\\' => 21,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Composer\\Installers\\' => 
        array (
            0 => __DIR__ . '/..' . '/composer/installers/src/Composer/Installers',
        ),
        'ACFGravityformsField\\' => 
        array (
            0 => __DIR__ . '/../..' . '/resources',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitfd2368103e25b49dd164ce246da68541::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitfd2368103e25b49dd164ce246da68541::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitfd2368103e25b49dd164ce246da68541::$classMap;

        }, null, ClassLoader::class);
    }
}
