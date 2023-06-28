package main_test 

import "testing"

func TestTest1(t *testing.T) {
	a := 10
	b := 20
	c := a+b 
	if c != 30 {
		t.Fatal("no correct")
	}
}


func TestTest2(t *testing.T) {
	a := 10
	b := 20
	c := a*b 
	if c != 200 {
		t.Fatal("no correct")
	}
}