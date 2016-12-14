#pragma strict

public var kontrola : GameObject;

public var zacetna_pozicija : Vector2;
public var koncna_pozicija : Vector2;

public var speed = -40;

function Start(){

	var pozicija_x = transform.position.x;

	zacetna_pozicija = transform.position;

	if(pozicija_x <= -16.5){ 

		var randomNumber = Random.Range(0, 56);

		GetComponent.<Rigidbody2D>().AddForce(new Vector2(randomNumber, speed));

	}
	else if(pozicija_x <= 23.5){

		randomNumber = Random.Range(-24.6, 24.6);

		GetComponent.<Rigidbody2D>().AddForce(new Vector2(randomNumber, speed));
	}

	else{

		randomNumber = Random.Range(-56, 0);

		GetComponent.<Rigidbody2D>().AddForce(new Vector2(randomNumber, speed));
	}

}

function OnCollisionEnter2D(col : Collision2D){

	if(col.gameObject.name == "Tla"){

		kontrola.GetComponent.<Spawning>().unicenje();
		Destroy(gameObject);
	}
}

function OnMouseDown(){

	koncna_pozicija = transform.position;

	var pot = Vector2.Distance(zacetna_pozicija, koncna_pozicija);

	Destroy(gameObject);
	kontrola.GetComponent.<Spawning>().zadetek(pot);
}

function hitrost(x : float){

	speed = x;
}