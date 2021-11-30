<?php
return array(
    'label' => array('Timeline', 'Slider Modul für die Zeitleiste'),
    'types' => array('content'),
    'contentCategory' => 'Leonhardt Module',
    'standardFields' => array('headline', 'cssID'),
    'fields' => array(
        'slides' => array(
            'label' => array('Slides', ''),
            'elementLabel' => '%s. Slide',
            'inputType' => 'list',
            'fields' => array(
                'slideContent' => array(
                    'label' => array('Inhalt des Slides', ''),
                    'eval' => array('rte' => 'tinyMCE'),
                    'inputType' => 'textarea',
                ),
            ),
        ),
    ),
);