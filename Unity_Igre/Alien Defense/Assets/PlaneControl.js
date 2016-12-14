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

		if(transform.position.x > 42){

			if(st_zadetkov == 0){

				for(var i = 0; i < 3; i++){

					kontrola.GetComponent.<Spawning>().zadetek(1);
				}

				Destroy(gameObject);
			}
			else{

				Destroy(gameObject);
			}
			
		}
	}

}


function OnCollisionEnter2D(col : Collision2D){

	if(col.gameObject.tag == "Meteor"){

		st_zadetkov++;

		kontrola.GetComponent.<Spawning>().plane_hit();
		Destroy(col.gameObject);

		if(st_zadetkov == 3){

			Destroy(gameObject);
		}
	}

	else if(col.gameObject.tag == "Plane"){

		Destroy(gameObject);
		Destroy(col.gameObject);
	}
}