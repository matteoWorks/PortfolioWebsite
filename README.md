> [!WARNING]
> The content of this Repository was developed mainly for Personal Use, but simple enough for others to explore and customize without difficulty.

# PortfolioWebsite

> [!NOTE]
> Being built purely with HTML, CSS and JavaScript, this Project has no version-specific dependencies.

## Table of Contents

+ [About](#about)
+ [Getting Started](#gettingStarted)
    + [Skill Assets](#skillAssets)
    + [Curriculum Assets](#curriculumAssets)
    + [Background Assets](#backgroundAssets)
    + [Website Variables Definition](#websiteVariablesDefinition)
    + [Personal Variables Definition](#personalVariablesDefinition)
+ [Execution](#execution)
+ [Retrospective](#retrospective)

## About <a name = "about"></a>

I just wanted to have a simple portfolio website that was not hard to maintain, hence this project was started. \
This repository provides a simple, customizable template for a portfolio website built purely with HTML and CSS. Feel free to explore it and personalize it by replacing my information with your own. \
The result can be seen on my own [website](https://matteobaggio.com).

## Getting Started <a name = "gettingStarted"></a>

### Skill Assets <a name = "skillAssets"></a>

In this portfolio website visual elements representing skills, experiences and education are emphasized. Hence many images and files related to skills and resumes are used. \
These images are located in the `assets/logoAssets` folder (images related to the skills of an individual) and `assets/language` folder (images related to language flags and certifications) and are named in the two following formats: `logo_[SKILL_NAME].png` or `flag_[FLAG_NAME].png`.

To add a new image, rename it using the template `logo_[SKILL_NAME].png` or `flag_[FLAG_NAME].png` and place it in the `assets/logoAssets` or `assets/language` folders.

> [!TIP]
> This Repository includes a basic set of assets, some of which may not be necessary for your portfolio website. Hence it is recommended to remove unused assets to keep your project clean and efficient; \
> It is also recommended to add your own assets to customize your portfolio website further.

The already available images shown divided by folder and in alphabetical order are the following: \
\
`assets/logoAssets` folder:
\
\
<img src="/assets/logoAssets/logo_anaconda.png" alt="Anaconda" width="36" />
<img src="/assets/logoAssets/logo_axios.png" alt="Axios" width="36" />
<img src="/assets/logoAssets/logo_codecov.png" alt="Codecov" width="36" />
<img src="/assets/logoAssets/logo_cpp.png" alt="C++" width="36" />
<img src="/assets/logoAssets/logo_css3.png" alt="CSS3" width="36" />
<img src="/assets/logoAssets/logo_docker.png" alt="Docker" width="36" />
<img src="/assets/logoAssets/logo_eslint.png" alt="ESLint" width="36" />
<img src="/assets/logoAssets/logo_express_day.png" alt="Express Day" width="36" />
<img src="/assets/logoAssets/logo_express_night.png" alt="Express Night" width="36" />
<img src="/assets/logoAssets/logo_filezilla.png" alt="FileZilla" width="36" />
<img src="/assets/logoAssets/logo_flask.png" alt="Flask" width="36" />
<img src="/assets/logoAssets/logo_gcc.png" alt="GCC" width="36" />
<img src="/assets/logoAssets/logo_github_day.png" alt="GitHub Day" width="36" />
<img src="/assets/logoAssets/logo_github_night.png" alt="GitHub Night" width="36" />
<img src="/assets/logoAssets/logo_githubactions.png" alt="GitHub Actions" width="36" />
<img src="/assets/logoAssets/logo_html5.png" alt="HTML5" width="36" />
<img src="/assets/logoAssets/logo_huggingface.png" alt="Hugging Face" width="36" />
<img src="/assets/logoAssets/logo_idapro.png" alt="IDA Pro" width="36" />
<img src="/assets/logoAssets/logo_javascript.png" alt="JavaScript" width="36" />
<img src="/assets/logoAssets/logo_jest.png" alt="Jest" width="36" />
<img src="/assets/logoAssets/logo_json.png" alt="JSON" width="36" />
<img src="/assets/logoAssets/logo_jupyter.png" alt="Jupyter" width="36" />
<img src="/assets/logoAssets/logo_latex_day.png" alt="LaTeX Day" width="36" />
<img src="/assets/logoAssets/logo_latex_night.png" alt="LaTeX Night" width="36" />
<img src="/assets/logoAssets/logo_llamacpp.png" alt="LlamaCpp" width="36" />
<img src="/assets/logoAssets/logo_lmstudio.png" alt="LMStudio" width="36" />
<img src="/assets/logoAssets/logo_matlab.png" alt="MATLAB" width="36" />
<img src="/assets/logoAssets/logo_microsoftexcel.png" alt="Microsoft Excel" width="36" />
<img src="/assets/logoAssets/logo_microsoftword.png" alt="Microsoft Word" width="36" />
<img src="/assets/logoAssets/logo_net.png" alt=".NET" width="36" />
<img src="/assets/logoAssets/logo_nodejs.png" alt="Node.js" width="36" />
<img src="/assets/logoAssets/logo_npm.png" alt="npm" width="36" />
<img src="/assets/logoAssets/logo_openapi_day.png" alt="OpenAPI Day" width="36" />
<img src="/assets/logoAssets/logo_openapi_night.png" alt="OpenAPI Night" width="36" />
<img src="/assets/logoAssets/logo_php.png" alt="PHP" width="36" />
<img src="/assets/logoAssets/logo_pytest.png" alt="PyTest" width="36" />
<img src="/assets/logoAssets/logo_python.png" alt="Python" width="36" />
<img src="/assets/logoAssets/logo_python_numpy.png" alt="Python NumPy" width="36" />
<img src="/assets/logoAssets/logo_python_pandas.png" alt="Python Pandas" width="36" />
<img src="/assets/logoAssets/logo_python_pytorch.png" alt="Python PyTorch" width="36" />
<img src="/assets/logoAssets/logo_python_tensorflow.png" alt="Python TensorFlow" width="36" />
<img src="/assets/logoAssets/logo_qt.png" alt="Qt" width="36" />
<img src="/assets/logoAssets/logo_reactjs.png" alt="ReactJS" width="36" />
<img src="//assets/logoAssets/logo_ruff.png" alt="Ruff" width="36" />
<img src="/assets/logoAssets/logo_sonarqube.png" alt="SonarQube" width="36" />
<img src="/assets/logoAssets/logo_spotify.png" alt="Spotify APIs" width="36" />
<img src="/assets/logoAssets/logo_sql.png" alt="SQL" width="36" />
<img src="/assets/logoAssets/logo_sql_microsoftsqlserver.png" alt="SQL Microsoft SQL Server" width="36" />
<img src="/assets/logoAssets/logo_sql_mysql.png" alt="SQL MySQL" width="36" />
<img src="/assets/logoAssets/logo_sql_postgresql.png" alt="SQL PostgreSQL" width="36" />
<img src="/assets/logoAssets/logo_staruml.png" alt="StarUML" width="36" />
<img src="/assets/logoAssets/logo_tailwindcss.png" alt="TailwindCSS" width="36" />
<img src="/assets/logoAssets/logo_typst_day.png" alt="Typst Day" width="36" />
<img src="/assets/logoAssets/logo_typst_night.png" alt="Typst Night" width="36" />
<img src="/assets/logoAssets/logo_uml.png" alt="UML" width="36" />
<img src="/assets/logoAssets/logo_visualbasic.png" alt="Visual Basic" width="36" />
<img src="/assets/logoAssets/logo_visualstudiocode.png" alt="Visual Studio Code" width="36" />
<img src="/assets/logoAssets/logo_wireshark.png" alt="Wireshark" width="36" />
\
\
`assets/language` folder:
\
\
<img src="/assets/language/flag_italy.png" alt="Italian" width="36" />
<img src="/assets/language/flag_japan.png" alt="Japanese" width="36" />
<img src="/assets/language/logo_jlpt_day.png" alt="JLPT Day" width="36" />
<img src="/assets/language/logo_jlpt_night.png" alt="JLPT Night" width="36" />
<img src="/assets/language/flag_uk.png" alt="English" width="36" />

### Curriculum Assets <a name = "curriculumAssets"></a>

> [!WARNING]
> This Repository contains my translated Curriculums, so make sure to remove them and replace them with your own.

This portfolio website also includes a curriculum section that contains a brief work resume of an individual. The resume can be displayed in multiple languages through its `.png` file extension version and downloaded through its `.pdf` file extension version, both contained in the `assets/curriculum` folder.

To add your own resumes, rename them using the template `[LANGUAGE]CV.png` and `[LANGUAGE]CV.pdf` and place them in the `assets/curriculum` folder.

### Background Assets <a name = "backgroundAssets"></a>

The backgrounds used in this portfolio website are contained in the `assets/background` folder, where the `background_landing.png`, `background_portfolio.png` and `background_curriculum.png` files can be found, each one being the background for each of the three sections present in the portfolio website. \
The `background_portfolioBox.png` file is also present, which is the background for the box containing an the education and experience of an individual, it is advised for this background to contrast `background_portfolio.png`.

### Website Variables Definition <a name = "websiteVariablesDefinition"></a>

> [!NOTE]
> This is not a template—everything is written directly in the HTML. Please, explore the `home.html` and `css/styles.css` files to properly understand how everything is structured.

Follow the above Note and explore the `index.html` file and the first rows of the `home.html` file, all the website variables are contained there. Remember also to change the `favicon.ico` and `favicon.png` files with the desired website logo.

### Personal Variables Definition <a name = "personalVariablesDefinition"></a>

> [!NOTE]
> This is not a template—everything is written directly in the HTML. Please, explore the "_home.html_" and "_css/styles.css_" files to properly understand how everything is structured.

Follow the above Note and explore the `home.html` and `css/styles.css` file.s You can follow the existing structure or personalize it however you prefer. Since this project is not built as a template, the files may feel a bit unstructured, but they should still be straightforward to navigate and modify.

## Execution <a name = "execution"></a>

As the project uses only HTML and CSS, you can deploy it by directly uploading the files to your domain.

## Retrospective <a name = "retrospective"></a>

In this project, my main focus was to build a simple portfolio website using only HTML and CSS, keeping it easy to maintain and update.
