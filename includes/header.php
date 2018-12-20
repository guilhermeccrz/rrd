
<!DOCTYPE html>
<html>

<head>
	<title>RRD</title>
	<script type="text/javascript" src="node_modules/jquery/dist/jquery.min.js"></script>
	<script type="text/javascript" src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="node_modules/slick-carousel/slick/slick.min.js"></script>
	<script type="text/javascript" src="assets/js/app.js"></script>
	<meta name="viewport" content="width=device-width, user-scalable=no">
	 <meta charset="UTF-8">

	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,700i,800,800i,900,900i" rel="stylesheet">

	<link rel="stylesheet" type="text/css" href="public/assets/css/app.css">
</head>

<body>

	<header>
		<h1><a href="/rrd/"><img src="public/assets/img/home/logo.png" width="205" height="68"></a></h1>

		<div class="btn-nav">
			<span class="closex action"></span>
			<div class="openxxx">
				<span class="r1"></span>
				<span class="r2"></span>
				<span class="r3"></span>
			</div>
		</div>

		<nav>
			<ul class="navigation">
				<li><a href="missao.php">Quem somos</a>
				<ul>
						<li><a href="missao.php">Missão, Visão e Valores</a></li>
						<li><a href="rrdnobrasil.php">RRD no Brasil</a></li>
						<li><a href="rrdnomundo.php">RRD no Mundo</a></li>
					</ul>

				</li>
				<li><a href="">Qualidade</a>
					<ul>
						<li><a href="certificacoes.php">Certificações</a></li>
						<li><a href="ehs.php">EHS</a></li>
						<li><a href="politica.php">Política</a></li>
						<li><a href="premio.php">Prêmios</a></li>
					</ul>
				</li>
				<li><a href="">Produtos e Serviços</a>
					<ul>
						<li><a href="">Editorial</a></li>
						<li><a href="">Impressão Segura - Dados Variáveis</a></li>
						<li><a href="">Etiquetas e rótulos</a></li>
						<li><a href="">Promocional e Comercial</a></li>
						<li><a href="">Software de Impressão <br> de Etiquetas Moore</a></li>
						<li><a href="">Formulários e Bobinas</a></li>
						<li><a href="">Editorial</a></li>
					</ul>
				</li>
				<li><a href="">Blog</a></li>
				<li><a href="">Carreiras</a></li>
				<li><a href="">Fale Conosco</a></li>
			</ul>
		</nav>

		<?php 
		
		if($breadcrumb_title !== '') {?>

		<div class="breadcrumb-x">
			<strong><?php echo $breadcrumb_title;?> / </strong><span><?php echo $breadcrumb_subtitle;?></span>
		</div>

	<?php } ?>

		<div class="search-box">
			<form>
				<div class="container-icon"><input type="submit" class="btn-icon" name="" value=" "></div>
				<div class="form-search">
					<input type="text" placeholder="O que você procura?" name="">
				</div>
			</form>
		</div>
	</header>

	<div class="sidebar">
		<a class="face"></a>
		<a class="linkedin"></a>
		<a class="youtube"></a>
		<a class="instagram"></a>

	</div>