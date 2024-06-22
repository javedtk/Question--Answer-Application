package com.hcl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.model.Admin;
import com.hcl.repository.AdminRepository;

@Service
public class AdminService {

	@Autowired
	AdminRepository adminRepository;
	
	// Insert the data in admin controller
	public String insertingUserData(Admin admin) {

		adminRepository.save(admin);
		return "data Inserting Successfully";
	}
	
	// Find all data in the list fom
	public List<Admin> getAllAdminData() {

		List<Admin> list = adminRepository.findAll();
		return list;
	}

	
	// update the admin data through id in admin
	public String updateAdminData(long id, Admin admin) {

		for (Admin adminData : adminRepository.findAll()) {

			if (adminData.getId() == id) {

				admin.setId(id);
				adminRepository.save(admin);
				return "Data is updated ";
			}
		}
		return " Id not found";
	}

	
	// delete admin data through id like single item
	public String deleteAdminData(long id) {

		for (Admin adminData : adminRepository.findAll()) {

			if (adminData.getId() == id) {

				adminRepository.deleteById(id);
				return "Data is deleted successfully ";
			}
		}
		return " Id not found";
	}

	
	// get admin data by id
	public Admin getAdminData(long id) {

		for (Admin adminData : adminRepository.findAll()) {
			if (adminData.getId() == id) {
				return adminData;
			}
		}
		return null;
	}

}
