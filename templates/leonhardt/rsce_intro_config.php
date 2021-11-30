<?php
return array(
    'label' => array('Intro Modul', 'Hero-Modul'),
    'types' => array('content'),
    'contentCategory' => 'Leonhardt Module',
    'standardFields' => array('cssID'),
    'fields' => array(
        'media' => array (
            'label' => array (
                'Mediendatei',
                '' 
            ),
            'inputType' => 'fileTree',
            'eval' => array (
                'tl_class'=>'clr',
                'fieldType' => 'radio',
                'filesOnly' => true,
                'extensions' => 'jpg,jpeg,png,gif,svg,mp4' 
            ) 
        ),
        'action' => array(
            'label' => array('Aktionskasten', 'Platz für aktuelle Hinweise etc.'),
            'eval' => array('rte' => 'tinyMCE', 'class' => 'w100 clr'),
            'inputType' => 'textarea',
        ),
    ),
);