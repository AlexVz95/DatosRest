package com.alex.rest;

import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.alex.vo.Datos;

@Path("/datos/")
public class ServicioDatos {
	
	
	
	@POST
	@Path("/nombre")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Datos getIt(){
		Datos p = new Datos();
		p.setName("Alex");
		p.setApePat("Perez");
		p.setApeMat("Vazquez");
		p.setEdad(22);
		p.setSexo("Masculino");
		
		return p;
	}
	
	
}
