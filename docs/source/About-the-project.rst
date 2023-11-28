=================
About the project
=================

What is this project?
---------------------

- This project stands to improve student's LMS user experience
- Offers intuitive interface
- With this, you can concentrate to you university course well
- You can manage your course with your taste, you can input your own data

.. note::
    You can also connect to your university's LMS system and get data through API server.
    But if the system does not support external log in, you should use offline-mode.

How this project works?
-----------------------

This project runs above electron which can be executed in Windows, macOS, Linux.
All the desktop platforms can be supported and users don't have to install complicated development enviorment.
Basically, this application is deployed by full packaged file.
Anyone who want to folk and develop their own app, just clone this project, install nodejs development enviorment, and just modify electron source file.

Support list
------------

+------------+------------+-----------+
|  Platform  | Support OS |Min Version|
+============+============+===========+
|   Apple    | macOS      | >= 10.15  |
+------------+------------+-----------+
|    X86     | Windows    |  >= 10    |
+------------+------------+-----------+
|   Linux    | Ubuntu     |>=18.04LTS |
+------------+------------+-----------+

Project hierarchy
-----------------

.. code-block::
   :linenos:

    (Projct Root)/
    ┣ docs/
    ┃ ┣ build/
    ┃ ┃ ┣ doctrees/
    ┃ ┃ ┗ html/
    ┃ ┣ source/
    ┃ ┃ ┣ _static/
    ┃ ┃ ┣ pages/
    ┃ ┃ ┣ conf.py
    ┃ ┃ ┗ index.rst
    ┃ ┣ ...
    ┣ sejonghud-app/
    ┃ ┣ build/
    ┃ ┣ out/
    ┃ ┃ ┣ main/
    ┃ ┃ ┣ preload/
    ┃ ┃ ┗ renderer/
    ┃ ┣ resources/
    ┃ ┣ src/
    ┃ ┃ ┣ main/
    ┃ ┃ ┣ preload/
    ┃ ┃ ┗ renderer/
    ┃ ┣ dev-app-update.yml
    ┃ ┣ electron-builder.yml
    ┃ ┣ electron.vite.config.js
    ┃ ┣ package-lock.json
    ┃ ┗ package.json
    ┣ .gitignore
    ┣ .readthedocs.yaml
    ┣ LICENSE
    ┣ Pipfile
    ┣ Pipfile.lock
    ┗ README.md

- Project root folder contains docs and sejonghud-app folder.
- Docs folder is consist of readthedocs source files.
- sejonghud-app have electron source in out folder and have react js files in src folder.
- Resources folder have assets which is used to contain images and svgs.
- Other json, yaml, lock files are configurations for development enviorment, All these files can be vary within each devloper's enviorment.