#pragma strict

public var kontrola : GameObject;

function Start(){

	var pozicija_x = transform.position.x;

	if(pozicija_x <= -16.5){ 

		var randomNumber = Random.Range(0, 56);

		GetComponent.<Rigidbody2D>().AddForce(new Vector2(randomNumber, -60));

	}
	else if(pozicija_x <= 23.5){

		randomNumber = Random.Range(-24.6, 24.6);

		GetComponent.<Rigidbody2D>().AddForce(new Vector2(randomNumber, -40));
	}

	else{

		randomNumber = Random.Range(-56, 0);

		GetComponent.<Rigidbody2D>().AddForce(new Vector2(randomNumber, -40));
	}

}

function OnCollisionEnter2D(col : Collision2D){

	if(col.gameObject.name == "Tla"){

		kontrola.GetComponent.<Spawning>().unicenje();
		Destroy(gameObject);
	}
}

function OnMouseDown(){

	Destroy(gameObject);
	kontrola.GetComponent.<Spawning>().zadetek();
}