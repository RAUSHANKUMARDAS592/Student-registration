package in.ashokit.entity;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Data
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String fatherName;
    private String motherName;
    private String dob;
    private String mobile;
    private String email;
    private String password;
    private String gender;
    private String department;
    private String course;
    private String city;
    private String address;

}

