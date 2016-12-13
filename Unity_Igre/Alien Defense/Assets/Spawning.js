#pragma strict

public var prefab : GameObject;
public var camera : Camera;

public var life : float;
public var score : float;

function Start() {

	score = 0;
	life = 10;

	InvokeRepeating("Ustvarjanje", 1.0f, 0.5f);
}

function Update(){

	if(life == 0){

		Time.timeScale = 0.0;
	}
}

function Ustvarjanje() {

	var x = Random.Range(-36.5f, 43.5f);
	Instantiate(prefab, new Vector3(x, 28.1, 0), Quaternion.identity);

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

function zadetek(){

	score = score + 1;
}