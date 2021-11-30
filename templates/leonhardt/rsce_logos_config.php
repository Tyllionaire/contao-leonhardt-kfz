<?php
return array(
    'label' => array('Logos', 'Slider Modul für Logos'),
    'types' => array('content'),
    'contentCategory' => 'Leonhardt Module',
    'standardFields' => array('headline', 'cssID'),
    'fields' => array(
        'slides' => array(
            'label' => array('Slides', ''),
            'elementLabel' => '%s. Slide',
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
                'link' => array(
                    'label' => array('Link', ''),
                    'eval' => array('class' => 'w100 wizard'),
                    'inputType' => 'text',
                ),
            ),
        ),
    ),
);