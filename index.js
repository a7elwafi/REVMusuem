

function init(){
	initRenderer() ; 
	initCamera() ; 
	initScene() ; 
}

function animer(){
	requestAnimationFrame(animer) ; 
	update() ; 
	render() ; 
}

// =========================================================================

function initRenderer(){
	_largeur = window.innerWidth ; 
	_hauteur = window.innerHeight ; 
	_renderer = new THREE.WebGLRenderer({antialias:true, alpha:true}) ;
	_renderer.setSize(_largeur, _hauteur) ; 
}

function initCamera(){
	_camera = new THREE.PerspectiveCamera(
			45.0,
			_largeur / _hauteur,
			0.1, 1000.0) ;
	_controleur = new KeyboardControls(_camera) ;  
}

function initScene(){
}

// =========================================================================

function update(){
	var dt = 0.001 ; 
	_controleur.update(dt) ; 
}

function render(){
	_renderer.render(_scene, _camera) ; 
}
