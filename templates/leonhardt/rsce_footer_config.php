<?php
return array(
    'label' => array('Footer', 'Modul für den Footer'),
    'types' => array('module'),
    'moduleCategory' => 'miscellaneous',
    'standardFields' => array('cssID'),
    'fields' => array(
        'contact' => array(
            'label' => array('Kontaktdaten', ''),
            'eval' => array('rte' => 'tinyMCE', 'class' => 'w100 clr'),
            'inputType' => 'textarea',
        ),
        'opening' => array(
            'label' => array('Öffnungszeiten', ''),
            'eval' => array('rte' => 'tinyMCE', 'class' => 'w100 clr'),
            'inputType' => 'textarea',
        ),
        'whatsapptext' => array(
            'label' => array('Text für WhatsApp Button', ''),
            'eval' => array('class' => 'w100'),
            'inputType' => 'text',
        ),
        'whatsappno' => array(
            'label' => array('Telefonnummer für WhatsApp Button', ''),
            'eval' => array('class' => 'w100'),
            'inputType' => 'text',
        ),
        'servicetext' => array(
            'label' => array('Text für Telefon Button', ''),
            'eval' => array('class' => 'w100'),
            'inputType' => 'text',
        ),
        'serviceno' => array(
            'label' => array('Telefonnummer für Telefon Button', ''),
            'eval' => array('class' => 'w100'),
            'inputType' => 'text',
        ),
    ),
);