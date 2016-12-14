#pragma strict

//Spremenljivke za Instantiate
public var prefab : GameObject;
public var letalo: GameObject;
public var camera : Camera;

//Spremenljivke za "dosežke igralca"
public var life : float;
public var score : float;
public var poraz : boolean;

//Spremenljivke za merjenje časa
var cas = 1.0;
var stevec = 0;

function Start() {

	score = 0;
	life = 100;
	poraz = false;

	InvokeRepeating("Ustvarjanje", 1.0f, cas);
}

function Update(){

	if(life == 0){

		Time.timeScale = 0.0;
	}
}

function Ustvarjanje() {

	stevec++;
	//Pozicija meteorjev
	var x = Random.Range(-29f, 35.6f);

	//Pozicija letal
	var l = Random.Range(3 , 20);

	//Izbira objekta
	var y = Random.Range(0, 100);

	if(stevec == 5){

		if(cas > 0.5){
			
			cas -= 0.2;
			stevec = 0;
		}
	}

	if(cas > 0.5)
	{
		Instantiate(prefab, new Vector3(x, 28.1, 0), Quaternion.identity);
	}
	else{

		x = Random.Range(-29f, 35.6f);
		Instantiate(prefab, new Vector3(x, 28.1, 0), Quaternion.identity);

		x = Random.Range(-29f, 3.6f);
		Instantiate(prefab, new Vector3(x, 28.1, 0), Quaternion.identity);

		if(y < 2){

			//Levo ali Desno
			var stran = Random.Range(0, 5);

			if(stran < 2.5){

				Instantiate(letalo, new Vector3(-43, l, 0), Quaternion.identity);
			}

			else if(stran > 2.5){

				Instantiate(letalo, new Vector3(50.2, l, 0), Quaternion.identity);
			}
		}
	}

}

function OnGUI(){

	GUI.Label(new Rect(10, 10, 100, 20), "Score: " + score);
	GUI.Label(new Rect(10, 30, 100, 20), "Life: " + life);

	if(life == 0){
		
		GUI.Label(new Rect(640, 300, 100, 20), "Game Over");
	}
}

function unicenje(){

	life = life - 1;
}

function plane_hit(){

	score = score - 1;
}


function zadetek(distanca : float){

	if(!poraz){
		
		var vrednost = 10/distanca;

		if(vrednost <= 0.5){

			score += 0.5;
		}
		else if(vrednost <= 1){

			score += 1;
		}
		else if(vrednost <= 1.5){

			score += 1.5;
		} 
		else if(vrednost > 1.5){

			score += 2;
		}
	}
}