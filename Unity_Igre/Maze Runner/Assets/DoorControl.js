#pragma strict

public var neki : Animator;
public var player : GameObject;

var zgornja_meja : float;
var spodnja_meja : float;
var leva_meja : float;
var desna_meja : float ;


function Start () {

	zgornja_meja = transform.position.y + 10;
	spodnja_meja = transform.position.y - 10;
	leva_meja = transform.position.x - 10;
	desna_meja = transform.position.x + 10;

	neki.speed = 0f;

}

function Update () {

	if( player.transform.position.y < zgornja_meja && player.transform.position.y > spodnja_meja && player.transform.position.x < desna_meja && player.transform.position.x > leva_meja){

		neki.speed = 1;
	}

}