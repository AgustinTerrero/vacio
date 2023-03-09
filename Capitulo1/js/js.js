dineroCofla = prompt("cuanto dinero tenes Cofla?");
dineroRoberto = prompt("cuanto dinero tenes Roberto?");
dineroPedro = prompt("cuanto dinero tenes Pedro?");

dineroCofla = parseInt(dineroCofla);
dineroRoberto = parseInt(dineroRoberto);
dineroPedro = parseInt(dineroPedro);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("cofla comprate le helado de agua")
    alert("y te sobran" + (dineroCofla - 0.6))
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("cofla comprate le helado de crema")
    alert("y te sobran" + (dineroCofla - 1))
} 
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("cofla comprate le helado de heladix")
    alert("y te sobran" + (dineroCofla - 1.6))
} 
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("cofla comprate le helado de heladovich")
    alert("y te sobran" + (dineroCofla - 1.7))
} 
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("cofla comprate le helado de helardo")
    alert("y te sobran" + (dineroCofla - 1.8))
} 
else if (dineroCofla >= 2.9) {
    alert("cofla comprate le helado con confites o pote de 1/4");
    alert("y te sobran" + (dineroCofla - 2.9))
} else {
    alert("Cofla que miseria")
}


if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto comprate le helado de agua")
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto comprate le helado de crema")
} 
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Roberto comprate le helado de heladix")
} 
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Roberto comprate le helado de heladovich")
} 
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Roberto comprate le helado de helardo")
} 
else if (dineroRoberto >= 2.9) {
    alert("Roberto comprate le helado con confites o pote de 1/4");
} else {
    alert("Roberto que miseria")
}



if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro comprate le helado de agua")
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro comprate le helado de crema")
} 
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro comprate le helado de heladix")
} 
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Pedro comprate le helado de heladovich")
} 
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro comprate le helado de helardo")
} 
else if (dineroPedro >= 2.9) {
    alert("Pedro comprate le helado con confites o pote de 1/4");
} else {
    alert("Pedro que miseria")
}