<?php
$breadcrumb_title = 'Fale Conosco';
$breadcrumb_subtitle = 'Atendimento eletrônico';
include 'includes/header.php';  // Works.
?>


	<!-- MISSAO VISÃO E VALORES -->
	<div class="session-single-02 bg-faleconosco">
		<div class="bg-bola bg-bola-faleconosco"></div>
			<div class="container container-title container-info">
				<div class="left-info left-info-no-height">
					<h1 class="menor">Atendimento <br>eletrônico</h1>
					<h2></h2>
					<p>Escolha o assunto que deseja tratar e preencha o formulário.
Em breve entraremos em contato.</p>
				</div> <br><br>
		

			<p><strong>Fale conosco</strong></p>
			<form class="form">
				
				<div class="form-control-100">
					<div class="select">
					<select class="escolha">
						<option>Selecione um assunto</option>
						<option value="querocomprar">Quero Comprar</option>
						<option value="querovisitar">Quero Visitar</option>
						<option value="sejadistribuidor">Seja um distribuidor</option> 
					</select>
					</div>
				</div>
			</form>
			
			<form class="form form-escolha" id="querocomprar">

				<div class="form-control-100">
					<span class="interesse-compra">Bobinas</span>
					<span class="interesse-compra">Billing</span>
					<span class="interesse-compra">Documentos Fiscais</span>
					<span class="interesse-compra">Editorial</span>
					<span class="interesse-compra">Documentos de Segurança</span>
					<span class="interesse-compra">Exames e Concursos</span>
					<span class="interesse-compra">Marketing Direto</span>
					<span class="interesse-compra">Formulários e Listagens</span>
					<span class="interesse-compra">Jogos promocionais e Loterias</span>
					<span class="interesse-compra">Print Management</span>
					<span class="interesse-compra">Promocional e Comercial</span>
					<span class="interesse-compra">Rótulos e Etiquetas</span>
					<input type="hidden" id="input-interesse-compra" value="[]" name="interesse-compra">
				</div>

				<div class="form-control-100">
					<input type="text" placeholder="Nome Completo" name="nome">
				</div>

				<div class="form-control-100">
					<input type="text" placeholder="CPF / CNPJ" name="cpfcnpj">
				</div>

				<div class="form-control-100">
					<input type="text" placeholder="E-mail" name="email">
				</div>

				<div class="form-control-50">
					<div class="select" name="estado">
					<select>
						<option>UF</option>
						<option>SP</option>
					</select>
					</div>
				</div>

				<div class="form-control-50">
					<div class="select" name="cidade">
					<select>
						<option>Cidade</option>
						<option>São Paulo</option>
					</select>
					</div>
				</div>

				<div class="form-control-100">
					<input type="text" placeholder="DDD | Número de telefone" name="ddd">
				</div>
				<div class="form-control-100">
					<label>Anexar Currículo</label>
					<input type="file" name="anexo">
				</div>
				<div class="form-control-100">
					<textarea placeholder="Deixe sua mensagem" name="mensagem"></textarea>
				</div>
				<div class="form-control-100">
					<input type="submit" value="Enviar" class="bt-azul" name="">
				</div>

			</form>

			<form class="form form-escolha" id="querovisitar">


				<div class="form-control-100">
					<input type="text" placeholder="Nome Completo" name="nome">
				</div>

				<div class="form-control-100">
					<input type="text" placeholder="CPF / CNPJ" name="cpfcnpj">
				</div>

				<div class="form-control-100">
					<input type="text" placeholder="E-mail" name="email">
				</div>

				<div class="form-control-50">
					<div class="select" name="estado">
					<select>
						<option>UF</option>
						<option>SP</option>
					</select>
					</div>
				</div>

				<div class="form-control-50">
					<div class="select" name="cidade">
					<select>
						<option>Cidade</option>
						<option>São Paulo</option>
					</select>
					</div>
				</div>

				<div class="form-control-100">
					<input type="text" placeholder="DDD | Número de telefone" name="ddd">
				</div>
				<div class="form-control-100">
					<label>Anexar Currículo</label>
					<input type="file" name="anexo">
				</div>
				<div class="form-control-100">
					<textarea placeholder="Deixe sua mensagem" name="mensagem"></textarea>
				</div>
				<div class="form-control-100">
					<input type="submit" value="Enviar" class="bt-azul" name="">
				</div>

			</form>

			<form class="form form-escolha" id="sejadistribuidor">


				<div class="form-control-100">
					<input type="text" placeholder="Nome Completo" name="nome">
				</div>

				<div class="form-control-100">
					<input type="text" placeholder="CPF / CNPJ" name="cpfcnpj">
				</div>

				<div class="form-control-100">
					<input type="text" placeholder="E-mail" name="email">
				</div>

				<div class="form-control-50">
					<div class="select" name="estado">
					<select>
						<option>UF</option>
						<option>SP</option>
					</select>
					</div>
				</div>

				<div class="form-control-50">
					<div class="select" name="cidade">
					<select>
						<option>Cidade</option>
						<option>São Paulo</option>
					</select>
					</div>
				</div>

				<div class="form-control-100">
					<input type="text" placeholder="DDD | Número de telefone" name="ddd">
				</div>
				<div class="form-control-100">
					<label>Anexar Currículo</label>
					<input type="file" name="anexo">
				</div>
				<div class="form-control-100">
					<textarea placeholder="Deixe sua mensagem" name="mensagem"></textarea>
				</div>
				<div class="form-control-100">
					<input type="submit" value="Enviar" class="bt-azul" name="">
				</div>

			</form>

			<div class="end-info">
<strong>Atendimento ao cliente</strong> <br>
0800 771 4989<br><br>

<strong>Espace Center</strong><br>
Av. Embaixador Macedo Soares, 10.735<br>
Vila Anastácio – São Paulo – SP<br>
CEP: 05095-035<br>
Contato: (11) 2104-4200<br><br>

<strong>Tamboré</strong><br>
Av. Tucunaré, 299<br>
Tamboré – Barueri – SP<br>
CEP: 06460-020<br>
Contato: (11) 2148-3500<br><br>

<strong>Osasco</strong><br>
Rua Robert Bosch, 1.221<br>
Indl. Anhanguera – Osasco – SP<br>
CEP: 06276-170<br>
Contato: (11) 2104-4000<br><br>

<strong>Blumenau</strong><br>
Rua Dr. Pedro Zimmermann, 5.735<br>
Itoupava Central – Blumenau – SC<br>
CEP: 89068-000<br>
Contato: (47) 2102-4000<br>
			</div>

			</div>
		
		</div>
	</div>

<?php
include 'includes/footer.php';  // Works.
?>
