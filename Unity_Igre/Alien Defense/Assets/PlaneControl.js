#pragma strict

public var kontrola : GameObject;
public var st_zadetkov = 0;
public var smer : String;

function Start () {

	smer = "levo";

	if(transform.position.x < 0){

		transform.Rotate(0, 180, 0);
		smer = "desno";
	}
}

function Update(){

	if(smer == "levo"){

		transform.position.x = transform.position.x - 0.2;
	}
	else if(smer == "desno"){

		transform.position.x = transform.position.x + 0.2;
	}
}


function OnCollisionEnter2D(col : Collision2D){

	if(col.gameObject.tag == "Meteor"){

		kontrola.GetComponent.<Spawning>().zadetek();
		Destroy(col.gameObject);

		if(st_zadetkov == 3){

			Destroy(gameObject);
		}

		st_zadetkov++;
	}
}