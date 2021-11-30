<?php
return array(
    'label' => array('Team', 'Darstellung des Teams'),
    'types' => array('content'),
    'contentCategory' => 'Leonhardt Module',
    'standardFields' => array('headline', 'cssID'),
    'fields' => array(
        'slides' => array(
            'label' => array('Personen', ''),
            'elementLabel' => '%s. Person',
            'inputType' => 'list',
            'fields' => array(
                'image' => array (
                    'label' => array (
                        'Bild der Person',
                        '' 
                    ),
                    'inputType' => 'fileTree',
                    'eval' => array (
                        'tl_class'=>'clr',
                        'fieldType' => 'radio',
                        'filesOnly' => true,
                        'extensions' => 'jpg,jpeg,png,gif,svg' 
                    ) 
                ),
                'size' => array (
                    'label' => array (
                        'Bildgröße',
                        'Bei nicht gewählter Bildgröße, wird das Bild unkomprimiert dargestellt.' 
                    ),
                    'inputType' => 'imageSize',
                    'options' => \System::getImageSizes(),
                    'eval' => array(
                        'rgxp' => 'digit',
                        'includeBlankOption' => true,
                    ),
                ),
                'slideContent' => array(
                    'label' => array('Inhalt des Slides', ''),
                    'eval' => array('rte' => 'tinyMCE'),
                    'inputType' => 'textarea',
                ),
            ),
        ),
    ),
);