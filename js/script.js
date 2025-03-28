// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Trisha Ray
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function calculateAreaOfTrapizoid () {
  // input
  const abase = parseInt(document.getElementById('a-base').value);
  const bbase = parseInt(document.getElementById('b-base').value);
  const height = parseInt(document.getElementById('height').value);

  // process
  const areaOfTrapizoid = [(abase + bbase) / 2] * height

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + areaOfTrapizoid + ' mm²'
}
