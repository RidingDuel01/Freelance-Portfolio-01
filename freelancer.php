<?php

try {
	if (isset($_POST['freelancer_name']) && !empty($_POST["freelancer_name"])) {
	    $freelancer_name = $_POST['freelancer_name'];
	}
	if (isset($_POST['freelancer_email']) && !empty($_POST["freelancer_email"])) {
	    $freelancer_email = $_POST['freelancer_email'];
	}
	if (isset($_POST['freelancer_cell']) && !empty($_POST["freelancer_cell"])) {
	    $freelancer_cell = $_POST['freelancer_cell'];
	}
	if (isset($_POST['human1']) && !empty($_POST["human1"])) {
	    $human1 = $_POST['human1'];
	}
	if (isset($_POST['human2']) && !empty($_POST["human2"])) {
	    $human2 = $_POST['human2'];
	}
	if (isset($_POST['human3']) && !empty($_POST["human3"])) {
	    $human3 = $_POST['human3'];
	}
	if (isset($_POST['human4']) && !empty($_POST["human4"])) {
	    $human4 = $_POST['human4'];
	}
	if (isset($_POST['human5']) && !empty($_POST["human5"])) {
	    $human5 = $_POST['human5'];
	}
	if (isset($_POST['freelancer_message']) && !empty($_POST["freelancer_message"])) {
	    $freelancer_message = $_POST['freelancer_message'];
	}

	//Send information to my email
	$masterrecipient = 'bama@bamamagassa.com';
	$mastersubject = 'Start A Project Appointment on Website';
	$mastermessage1 = "Hey Bama, $freelancer_name used the Start A Project form on your website. Here is the information about them.
	Name: $freelancer_name
	E-mail: $freelancer_email
	Cell: $freelancer_cell
	Develope Site - Checked : $human1
	Update Website Content - Checked: $human2
	Website Redesign - Checked: $human3
	Instagram Marketing - Checked: $human4
	Free Consultation - Checked: $human5
	Message: $freelancer_message";
	$header = 'From:' . $freelancer_email;
	mail($masterrecipient, $mastersubject, $mastermessage1, $header);

	//Send email notification to person who's contacting me
	$sendersubject = "From Bama - Web Developing Freelancer";
	$sendermessage1 = "Hello! $freelancer_name, Thank you for contacting us. This is a contact confirmation email to let you know that your message has been sent and Bama will contact you as soon as possible. Thank you very much and can't wait to start working with you.";
	$senderheader = 'From:' . $masterrecipient;
	mail($freelancer_email, $sendersubject, $sendermessage1, $senderheader);
	
    }
catch(PDOException $e)
    {
    echo "Error: " . $e->getMessage();
    }

?>