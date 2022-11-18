describe(' teste no web hub ', () => {
  it('Entrar no site', () => {
    cy.visit('http://webhub.cf/examples/index.php')
  })

  it('Esperar carregar', () => {
		cy.wait(4000);
	})

  it('Entrar no login', () => {
		cy.contains('Login').click({
			multiple: true,
			force: true
		});
	})

  it('Clica no input email', () => {
		cy.get('input[name="emailpop"]').click({
			multiple: true,
			force: true
		});
	})

  it('Digita no campo email', () => {
		cy.get('input[name="emailpop"]').type('webhub.dev@gmail.com');
	})
  
  it('Clica no input senha', () => {
		cy.get('input[name="senhapop"]').click({
			multiple: true,
			force: true
		});
	})

  it('Digita no campo senha', () => {
		cy.get('input[name="senhapop"]').type('webhub123');
	})
  
  it('Entrar na página', () => {
		cy.contains('Entrar').click({
			multiple: true,
			force: true
		});
	})

  it('E clica na imagem de perfil', () => {
		cy.get('li[class="dropdown nav-item"]').click({
			multiple: true,
			force: true
		});
	})
  
  it('E clica em Log Out', () => {
    cy.get('a[href="logout.php"]').click({
			multiple: true,
			force: true
		});
	})

})